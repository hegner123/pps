import { useEffect } from "react";
import { useSong } from "../../hooks/useSong";

const SongDetails = ({ song }) => {
  const songData = useSong(song);
  useEffect(() => {
    console.log(songData);
  }, [songData.fetched]);

  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <h3 className="col-start-3 col-end-7 text-3xl">{songData.song?.name}</h3>
      <div className="col-start-3 col-end-7">
        <ul className="col-start-3 col-end-7 list-disc list-inside">
          <li>
            <p className="inline">{songData.song?.slug}</p>
          </li>
          <li>
            <p className="inline">BPM: {songData.song?.bpm}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SongDetails;
