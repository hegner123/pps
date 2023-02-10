import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export const useSongs = (projectId) => {
  const router = useRouter();
  const { slug } = router.query;

  const [songs, setSongs] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function getSongs() {
    let { data: Songs, error } = await supabase
      .from("Songs")
      .select("*")
      .eq("project_id", `${projectId}`);

    if (error) console.log("error", error);

    return Songs;
  }
  if (fetched === false) {
    getSongs(slug).then((data) => {
      setSongs(data);
      setFetched(true);
    });
  }

  return { songs, slug, fetched };
};
