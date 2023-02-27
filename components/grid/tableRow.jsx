import { useEffect, useState } from "react";
import { useArrangement } from "../../hooks/useArrangement";
import { TableCell } from "./tableCell";
import { useAtom } from "jotai";
import { selectedSongInit , currentArrangement} from "../../state/store";

export const TableRow = ({ songTitle, songData, arrangementOrder }) => {
  const arrangement = useArrangement(songData.id, arrangementOrder);


  const [ready, setReady] = useState(false);
  const [setSelectedInst] = useAtom(selectedSongInit);
  const [currentArrangements] = useAtom(currentArrangement);

  useEffect(() => {
    if (arrangement.ready) {
      setReady(true);
    }
  }, [arrangement]);
  return (
    <>
      {ready && (
        <>
          <div
            className="cell hover:bg-slate-200 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedInst(songData?.id)}>
            {songTitle}
          </div>
          {currentArrangements.length > 0 &&
            currentArrangements?.orderedInstruments.map((instrument) => (
              <TableCell key={instrument.id} instId={instrument.id} />
            ))}
        </>
      )}
    </>
  );
};
