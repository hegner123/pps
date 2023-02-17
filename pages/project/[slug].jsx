import { useEffect, useState } from "react";

import { Grid } from "../../components/grid/";
import { useProject } from "../../hooks/useProject";
import { useRouter } from "next/router";
import SongDetails from "../../components/song/song";
import { useGridStore } from "../../hooks/useGridStore";

const Dashboard = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const [updateAlert, setUpdateAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const gridStore = useGridStore();

  const projectData = useProject(router);

  useEffect(() => {
    if (projectData?.fetched) {
      setReady(true);
    }
  }, [projectData?.fetched]);

  return (
    <div className="bg-slate-50 min-h-screen min-w-full grid grid-cols-12  py-60">
      <div className="col-start-3 col-span-6 pt-5">
        <h1 className="text-6xl ">{projectData?.hasProject?.name}</h1>
        {showAlert && (
          <div>
            <p>Update received!</p>
          </div>
        )}
        <div className="col-start-3 col-end-7">
          {ready && (
            <Grid
              projectSlug={projectData?.projectSlug}
              projectData={projectData?.hasProject}
            />
          )}
          {ready && <SongDetails song={gridStore.selectedSong} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
