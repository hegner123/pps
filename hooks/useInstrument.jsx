import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export const useInstrument = (id) => {
  const [status, setStatus] = useState();
  const [ready, setReady] = useState(false);
  const [instrumentId, setInstrumentId] = useState(id);
  const [updating, setUpdating] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

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
      let { data: Status, error } = await supabaseClient
        .from("Instruments")
        .update({ status: `${update}` })
        .eq("id", `${instrumentId.instId}`)
        .select();

      if (error) console.log("error", error);

      return Status;
    }
  }

  useEffect(() => {
    async function getInstrument(instId) {
      let { data: Instruments, error } = await supabaseClient
        .from("Instruments")
        .select("status")
        .eq("id", `${instrumentId.instId}`);

      if (error) console.log("error", error);

      return Instruments;
    }
    if (instrumentId && ready === false && user) {
      getInstrument(instrumentId.instId).then((data) => {
        console.log(data);
        if(data[0]){
        // setStatus(data[0].status);
        setReady(true);
        }
      });
    }
  }, [instrumentId, user]);

  return { status, ready, onclick: handleInstrumentUpdate };
};
