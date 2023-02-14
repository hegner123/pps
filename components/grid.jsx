import { useEffect, useState } from "react";
import { useArrangement } from "../hooks/useArrangement";
import { useSongs } from "../hooks/useSongs";
import { TableRow } from "./tableRow";

export const Grid = ({ projectSlug, projectData }) => {
  const songData = useSongs(projectData?.id);
  const [songTitles, setSongTitles] = useState([]);
  const [songIds, setSongIds] = useState([]);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (songData.fetched) {
      setReady(true);
      songData?.songs.forEach((song) => {
        setSongIds((songIds) => [...songIds, song.id]);
        setSongTitles((songTitles) => [...songTitles, song.name]);
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
              {ready &&
                projectData.arrangement_order?.order.map((instrument) => (
                  <th className="capitalize" key={instrument}>
                    {instrument}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {ready &&
              songData.songs.map((song, i) => (
                <TableRow
                  key={songTitles[i]}
                  songTitle={songTitles[i]}
                  songData={song}
                  arrangementOrder={projectData.arrangement_order?.order}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
