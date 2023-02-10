import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useInstruments = (song) => {
  const [instruments, setInstruments] = useState(null);
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

  if (song && fetched === false) {
    getInstruments(song).then((data) => {
      setInstruments(data);
      setFetched(true);
    });
  }

  return { instruments, fetched, onchange: handleInstrumentUpdate };
};
