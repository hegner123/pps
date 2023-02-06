import { useEffect, useState } from "react";
import { useSongs } from "../../hooks/useSongs";
import { Grid } from "../../components/grid";

const Dashboard = () => {
  const songData = useSongs();
  const [songTitles, setSongTitles] = useState([]);
  const [songIds, setSongIds] = useState([]);

  useEffect(() => {
    songData?.songs?.forEach((song) => {
      setSongTitles((songTitles) => [...songTitles, song.name]);
      setSongIds((songIds) => [...songIds, song.id]);
    });
  }, [songData.fetched]);

  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <h1 className="text-6xl col-start-3 col-end-7">{songData?.slug}</h1>
      <div className="col-start-3 col-end-7">
        {songData?.fetched && (
          <Grid songTitles={songTitles} songIds={songIds} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
