import { useEffect, useState } from "react";
import { useArrangement } from "../hooks/useArrangement";
import { TableCell } from "./tableCell";
export const TableRow = ({ songTitle, songData, arrangementOrder }) => {
  const arrangement = useArrangement(songData.id, arrangementOrder);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (arrangement.ready) {
      setReady(true);
    }
  }, [arrangement]);
  return (
    <tr key={songTitle}>
      <td>{songTitle}</td>
      {arrangement.ready &&
        arrangement.orderedInstruments.map((instrument) => (
          <TableCell key={instrument.id} instId={instrument.id} />
        ))}
    </tr>
  );
};
