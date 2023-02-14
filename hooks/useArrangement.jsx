import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import _ from "lodash";

export const useArrangement = (songId, arrangementOrder) => {
  const [hasInstruments, setHasInstruments] = useState([]);
  const [orderedInstruments, setOrderedInstruments] = useState([]);
  const [ready, setReady] = useState(false);
  const [fetched, setFetched] = useState(false);

  async function getInstruments(song) {
    let { data: Instruments, error } = await supabase
      .from("Instruments")
      .select("id, name")
      .eq("song_id", `${song}`);

    if (error) console.log("error", error);

    return Instruments;
  }

  function orderInstruments(instruments) {
    const ordered = [];
    arrangementOrder.forEach((order) => {
      instruments.forEach((instrument) => {
        if (instrument.name.toLowerCase() === order) {
          ordered.push(instrument);
        }
      });
    });

    return ordered;
  }

  useEffect(() => {
    if (songId && fetched === false) {
      getInstruments(songId).then((data) => {
        if (data.length > 0) {
          setHasInstruments(data);
        }
        setFetched(true);
      });
    }
  }, [songId, fetched]);

  useEffect(() => {
    if (hasInstruments && ready === false && fetched === true) {
      setOrderedInstruments(orderInstruments(hasInstruments));
      setReady(true);
    }
  }, [hasInstruments, fetched]);

  return {
    orderedInstruments,
    ready,
    onchange: handleInstrumentUpdate,
  };
};
