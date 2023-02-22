import { useSong } from "../../hooks/useSong";

const SongDetails = ({ song }) => {
  const songData = useSong(song);

  return (
    <>
      {songData && (
        <>
          <h3 className="col-start-3 col-end-7 text-3xl">
            {songData.song?.name}
          </h3>
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
        </>
      )}
    </>
  );
};

export default SongDetails;
