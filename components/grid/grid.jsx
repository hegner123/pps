import { useEffect, useState } from "react";
import { useArrangement } from "../../hooks/useArrangement";
import { useSongs } from "../../hooks/useSongs";
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
      <div
        className="grid "
        style={{
          gridTemplateColumns:
            "repeat(auto-fill, min(fit-content,var(--grid-cell-size)))",
        }}>
        <div className="col-start-1 col-span-1 row-start-1"></div>
        {ready &&
          projectData.arrangement_order?.order.map((instrument, i) => (
            <div
              className={`capitalize col-start-${
                i + 2
              } row-start-1 text-center`}
              key={instrument}>
              {instrument}
            </div>
          ))}

        {ready &&
          songData.songs.map((song, i) => (
            <TableRow
              key={songTitles[i]}
              songTitle={songTitles[i]}
              songData={song}
              arrangementOrder={projectData.arrangement_order?.order}
            />
          ))}
      </div>
    </>
  );
};
