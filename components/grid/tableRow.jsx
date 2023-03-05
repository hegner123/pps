import { useEffect, useState } from "react";
import { useArrangement } from "../../hooks/useArrangement";
import { TableCell } from "./tableCell";
import { useAtom } from "jotai";
import { selectedSongInit , currentArrangement} from "../../state/store";

export const TableRow = ({ songTitle, songData }) => {
  const arrangement = useAtom(currentArrangement);


  const [ready, setReady] = useState(false);
  const [setSelectedInst] = useAtom(selectedSongInit);

  useEffect(() => {
    if (arrangement[0]?.length > 0) {
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
          {arrangement[0].length > 0 &&
            arrangement[0]?.map((instrument) => (
              <TableCell key={instrument.id} instId={instrument.id} />
            ))}
        </>
      )}
    </>
  );
};
