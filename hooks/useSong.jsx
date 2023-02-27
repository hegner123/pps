import { useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import utils from "../utils";

export const useSong = (id) => {
  const [song, setSong] = useState(null);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  async function newSong(form) {
    let formSlug = utils.slugify(form.name);
    if (form === undefined) {
      console.log("undefined form");
      return;
    }
    // console.log("user", user);
    const { data, error } = await supabaseClient
      .from("Songs")
      .insert([
        {
          name: `${form.name}`,
          slug: `${formSlug}`,
          user_ids: [`${user.id}`],
        },
      ])
      .select();
    if (error) console.log("error", error);
    
    return data;
  }

  useEffect(() => {
    async function getSong(id) {
      let { data: Song, error } = await supabaseClient
        .from("Songs")
        .select("*")
        .eq("id", `${id}`);

      if (error) console.log("error", error);
      

      return Song[0];
    }
    if (user) {
      getSong(id).then((data) => {
        setSong(data);
      });
    }
  }, [user, id]);

  return { song, id };
};
