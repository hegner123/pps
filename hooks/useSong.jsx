import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export const useSong = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [song, setSong] = useState(null);
  const [fetched, setFetched] = useState(false);

  async function getSong(slug) {
    let { data: Song, error } = await supabase
      .from("Songs")
      .select("*")
      .eq("slug", `${slug}`);

    if (error) console.log("error", error);

    return Song[0];
  }
  getSong(slug).then((data) => {
    setSong(data);
    setFetched(true);
    
  });

  return { song, slug, fetched };
};