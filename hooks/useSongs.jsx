import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export const useSongs = (projectId) => {
  const router = useRouter();
  const { slug } = router.query;
  const [songs, setSongs] = useState([]);
  const [fetched, setFetched] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    async function getSongs() {
      let { data: Songs, error } = await supabaseClient
        .from("Songs")
        .select("*")
        .eq("project_id", `${projectId}`);

      if (error) console.log("error", error);

      return Songs;
    }
    if (fetched === false && user) {
      getSongs(slug).then((data) => {
        setSongs(data);
        setFetched(true);
      });
    }
  }, [user]);

  return { songs, slug, fetched };
};
