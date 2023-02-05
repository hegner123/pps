import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export const useSong = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [song, setSong] = useState(null);

  useEffect(() => {
    console.log(slug);
    }, []);

  async function getSong(slug) {
    if(slug){
        
    }
    let { data: Song, error } = await supabase.from("Songs").select("*").eq('slug', `${slug}`);
    

    if (error) console.log("error", error);

    return Song[0];
  }
  getSong(slug).then((data) =>{

    
      setSong(data)
    }
  );

 return {song,slug}
};