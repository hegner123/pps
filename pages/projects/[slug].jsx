import { useSongs } from "../../hooks/useSongs";

const Project = () => {
  const songData = useSongs();
  // console.log(songData);

  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <p>{songData.slug}</p>
      <ul>
        {songData.songs.map((song) => (
          <li key={song.id}>
            <a href={`/songs/${song.slug}`}>{song.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
