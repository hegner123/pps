import { useEffect, useState } from "react";
import { useArrangement } from "../hooks/useArrangement";
import { useSongs } from "../hooks/useSongs";

export const Grid = ({projectSlug, projectId,projectArrangement}) => {
  const songData = useSongs(projectId);
  const [songTitles, setSongTitles] = useState([]);
  const [songIds, setSongIds] = useState([]);
  const arrangement = useArrangement(songIds, projectArrangement);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (arrangement?.ready && fetched === false) {
      console.log(arrangement);
      setFetched(true);
    }
  }, [arrangement]);
  useEffect(() => {
    if (projectSlug) {
      songData?.songs?.forEach((song) => {
        setSongTitles((songTitles) => [...songTitles, song.name]);
        setSongIds((songIds) => [...songIds, song.id]);
      });
    }
  }, [songData.fetched]);

  return (
    <>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              {arrangement &&
                arrangement.arrangementOrder?.map((instrument, i) => (
                  <>
                    <th className="capitalize" key={i}>
                      {instrument}
                    </th>
                  </>
                ))}
            </tr>
          </thead>
          <tbody>
            {songTitles &&
              songTitles.map((song, i) => (
                <tr key={song}>
                  <td>{song}</td>
                  {arrangement &&
                    arrangement.orderedInstruments[i]?.map((instrument, j) => (
                      <td>
                        <p>{j}</p>
                      </td>
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
