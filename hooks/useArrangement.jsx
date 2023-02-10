import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import _ from "lodash";

export const useArrangement = (songIds, arrangementOrder) => {
  const [hasInstruments, setInstruments] = useState([]);
  const [compiledInstruments, setCompiledInstruments] = useState([]);
  const [orderedInstruments, setOrderedInstruments] = useState([]);
  const [arrangement, setArrangement] = useState([]);
  const [ready, setReady] = useState(false);

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

  useEffect(() => {
    if (songIds && fetched === false) {
      songIds.forEach((song) => {
        getInstruments(song).then((data) => {
          if (data.length > 0) {
            setInstruments((hasInstruments) => [...hasInstruments, data]);
          }
          setFetched(true);
        });
      });
    }
  }, [songIds, fetched]);

  useEffect(() => {
    hasInstruments?.forEach((song) => {
      song.forEach((instrument) => {
        if (compiledInstruments.includes(instrument.name) === false) {
          setCompiledInstruments((compiledInstruments) => [
            ...compiledInstruments,
            instrument.name,
          ]);
        }
      });
    });
    if (hasInstruments) {
      orderInstruments();
    }
  }, [hasInstruments, fetched]);

  useEffect(() => {
    if (orderedInstruments.length === songIds.length && ready === false) {
      console.log(songIds.length);
      setReady(true);
    }
  }, [orderedInstruments]);

  // Create new array with instruments in the order they appear in the arrangement

  function orderInstruments() {
    let order = [];
    hasInstruments?.forEach((song) => {
      let ordered = [];
      arrangementOrder?.forEach((instOrder) => {
        song.forEach((instrument) => {
          if (instOrder === instrument.name.toLowerCase()) {
            ordered.push(instrument);
          } else {
            ordered.push({ name: instOrder, status: null });
          }
        });
      });
      order.push(ordered);
    });
    setOrderedInstruments(order);
  }

  return {
    hasInstruments,
    orderedInstruments,
    arrangementOrder,

    ready,
    onchange: handleInstrumentUpdate,
  };
};
