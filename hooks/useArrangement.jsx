import { useEffect, useState } from "react";
import _ from "lodash";

export const useArrangement = (songId, arrangementOrder) => {
  const [hasInstruments, setHasInstruments] = useState([]);
  const [orderedInstruments, setOrderedInstruments] = useState([]);
  const [ready, setReady] = useState(false);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function getInstruments(song) {
      let { data: Instruments, error } = await supabaseClient
        .from("Instruments")
        .select("id, name")
        .eq("song_id", `${song}`);

      if (error) console.log("error", error);

      return Instruments;
    }
    if (songId && fetched === false && user) {
      getInstruments(songId).then((data) => {
        if (data.length > 0) {
          setHasInstruments(data);
        }
        setFetched(true);
      });
    }
  }, [songId, fetched, user]);

  useEffect(() => {
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
