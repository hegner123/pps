import { useEffect, useState } from "react";

import { Grid } from "../../components/grid";
import { useProject } from "../../hooks/useProject";
import { useRouter } from "next/router";
import { supabase } from "../../lib/supabaseClient";

const Dashboard = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const [updateAlert, setUpdateAlert] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // SUBSCRIBE TO UPDATES
  const Instruments = supabase
    .channel("instrument_changes")
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "Instruments" },
      (payload) => {
        console.log("Change received!", payload);
        setUpdateAlert(payload);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      }
    )
    .subscribe();

  const projectData = useProject(router);

  useEffect(() => {
    if (projectData?.fetched) {
      setReady(true);
    }
  }, [projectData?.fetched]);

  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <h1 className="text-6xl col-start-3 col-end-7">
        {projectData?.hasProject?.name}
      </h1>
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
      </div>
    </div>
  );
};

export default Dashboard;
