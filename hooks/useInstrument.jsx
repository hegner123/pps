import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export const useInstrument = (id) => {
  const [status, setStatus] = useState();
  const [ready, setReady] = useState(false);
  const [instrumentId, setInstrumentId] = useState(id);
  const [updating, setUpdating] = useState(false);

  async function getInstrument(instId) {
    let { data: Instruments, error } = await supabase
      .from("Instruments")
      .select("status")
      .eq("id", `${instrumentId.instId}`);

    if (error) console.log("error", error);

    return Instruments;
  }

  function handleInstrumentUpdate(e) {
    let update;
    if (status === "incomplete") {
      update = "complete";
    } else {
      update = "incomplete";
    }

    updateInstrument(update).then((data) => {
      setStatus(data[0].status);
    });

    async function updateInstrument() {
      let { data: Status, error } = await supabase
        .from("Instruments")
        .update({ status: `${update}` })
        .eq("id", `${instrumentId.instId}`)
        .select();

      if (error) console.log("error", error);

      return Status;
    }
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
