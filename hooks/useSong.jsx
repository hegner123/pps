import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export const useSong = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [song, setSong] = useState(null);
  const [fetched, setFetched] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    async function getSong(slug) {
      let { data: Song, error } = await supabaseClient
        .from("Songs")
        .select("*")
        .eq("slug", `${slug}`);

      if (error) console.log("error", error);

      return Song[0];
    }
    if (fetched === false && user) {
      getSong(slug).then((data) => {
        setSong(data);
        setFetched(true);
      });
    }
  }, [user]);

  return { song, slug, fetched };
};
