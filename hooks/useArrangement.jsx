import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useArrangement = (songIds) => {
  const [instruments, setInstruments] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function getInstruments(song) {
    let { data: Instruments, error } = await supabase
      .from("Instruments")
      .select("*")
      .eq("song_id", `${song}`);

    if (error) console.log("error", error);

    return Instruments;
  }

  function handleInstrumentUpdate(e) {
    const { name, value } = e.target;
    // console.log(value);
  }

  if (songIds && fetched === false) {
    songIds.forEach((song) => {
      getInstruments(song).then((data) => {
        setInstruments((instruments) => [...instruments, data]);
        setFetched(true);
      });
    });
  }

  return { instruments, fetched, onchange: handleInstrumentUpdate };
};
