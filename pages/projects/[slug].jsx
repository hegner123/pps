import { useRouter } from "next/router";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [songs, setSongs] = useState([]);
  async function getSongs() {
    let { data: Songs, error } = await supabase.from("Songs").select("*");

    if (error) console.log("error", error);

    return Songs;
  }
  getSongs(slug).then((data) => setSongs(data));

  return (
    <div>
      <p>{slug}</p>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <a href={`/songs/${song.slug}`}>{song.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
