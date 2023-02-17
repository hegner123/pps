import { useEffect, useState } from "react";
import { useInstrument } from "../../hooks/useInstrument";
export const TableCell = (instId) => {
  const [status, setStatus] = useState(false);
  const inst = useInstrument(instId);
  useEffect(() => {
    if (inst.ready) {
      console.log(inst);
    }
  }, [inst]);
  const statusClass =
    inst.status === "complete" ? "bg-green-500" : "bg-red-500";
  return (
    <div
      onClick={inst.onclick}
      className={`${statusClass} cursor-pointer cell p-2`}
      style={{ "--tw-brightness": 0.8 }}></div>
  );
};
