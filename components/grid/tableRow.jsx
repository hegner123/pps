import { useEffect, useState } from "react";
import { useArrangement } from "../../hooks/useArrangement";
import { TableCell } from "./tableCell";
import { useGridStore } from "../../hooks/useGridStore";
export const TableRow = ({ songTitle, songData, arrangementOrder }) => {
  const arrangement = useArrangement(songData.id, arrangementOrder);
  const gridStore = useGridStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (arrangement.ready) {
      setReady(true);
    }
  }, [arrangement]);
  return (
    <>
      <div
        className="cell"
        onClick={() => gridStore.handleSelectSong(songData.id)}>
        {songTitle}
      </div>
      {arrangement.ready &&
        arrangement.orderedInstruments.map((instrument) => (
          <TableCell key={instrument.id} instId={instrument.id} />
        ))}
    </>
  );
};
