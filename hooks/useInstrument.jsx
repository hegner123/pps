import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export const useInstrument = (instrumentId) => {
  const [status, setStatus] = useState();
  const [ready, setReady] = useState(false);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {}, []);

  async function getInstrument(instId) {
    let { data: Instruments, error } = await supabase
      .from("Instruments")
      .select("status")
      .eq("id", `${instId}`);

    if (error) console.log("error", error);

    return Instruments;
  }

  async function handleInstrumentUpdate(e) {
    let update;
    if (status === "incomplete") {
      update = "complete";
    } else {
      update = "incomplete";
    }

    console.log("update", update);
    console.log("instId", instrumentId.instId);

    const { data: Status, error } = await supabase
      .from("Instruments")
      .update({ status: update })
      .eq("id", instrumentId.instId)
      .select();

    if (error) console.log("error", error);
    console.log(Status);

    setStatus(Status);
  }

  useEffect(() => {
    if (instrumentId && ready === false) {
      getInstrument(instrumentId.instId).then((data) => {
        setStatus(data[0].status);
        setReady(true);
      });
    }
  }, [instrumentId]);

  return { status, ready, onclick: handleInstrumentUpdate };
};
