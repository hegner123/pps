import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { currentArrangement } from "../state/store";
import { projectId } from "../state/store";
import { useAtom } from "jotai";
import _ from "lodash";

export const useArrangement = (songId, arrangementOrder) => {
  const [hasProjectId]=useAtom(projectId);
  const [hasInstruments, setHasInstruments] = useState([]);
  const [orderedInstruments, setOrderedInstruments] = useState([]);
  const [ready, setReady] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [arrangedInstruments, setArrangedInstruments] = useAtom(currentArrangement);
  const supabaseClient = useSupabaseClient();

    async function updateArrangement() {
      const updateData={order:[...arrangedInstruments]}
      const jsonUpdateData = JSON.stringify(updateData);
      let { data: newArrangement, error } = await supabaseClient
        .from("Projects")
        .update({arrangement_order: `${jsonUpdateData}`})
        .eq("id", `${hasProjectId}`);
        if (error) console.log("error", error);

        

      return newArrangement;
    }

  useEffect(() => {
    async function getInstruments(song) {
      let { data: Instruments, error } = await supabaseClient
        .from("Instruments")
        .select("id, name")
        .eq("song_id", `${song}`);

      if (error) console.log("error", error);

      return Instruments;
    }


  }, [songId, fetched]);

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
    arrangedInstruments,
    ready,
    updateArrangement,
  };
};
