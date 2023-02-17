import { useEffect, useState } from "react";

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export const useSong = (id) => {
  const [song, setSong] = useState(null);
  const [fetched, setFetched] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    async function getSong(id) {
      let { data: Song, error } = await supabaseClient
        .from("Songs")
        .select("*")
        .eq("id", `${id}`);

      if (error) console.log("error", error);
      console.log(Song[0]);

      return Song[0];
    }
    if (fetched === false && user) {
      getSong(id).then((data) => {
        setSong(data);
        setFetched(true);
      });
    }
  }, [user]);

  return { song, id, fetched };
};
