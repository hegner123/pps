import { useEffect, useState } from "react";
import { useInstrument } from "../hooks/useInstrument";
export const TableCell = (instId) => {
  const [status, setStatus] = useState(false);
  const inst = useInstrument(instId);
  useEffect(() => {
    if (inst.ready) {
      console.log(inst);
    }
  }, [inst]);
  const classes = inst.status === "complete" ? "bg-green-500" : "bg-red-500";
  return (
    <td onClick={inst.onclick} className={classes}>
      test
    </td>
  );
};
