import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export const useSongs = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [songs, setSongs] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function getSongs() {
    let { data: Songs, error } = await supabase.from("Songs").select("*");

    if (error) console.log("error", error);

    return Songs;
  }
  getSongs(slug).then((data) => {
    setSongs(data);
    setFetched(true);
  });

  return { songs, slug, fetched };
};
