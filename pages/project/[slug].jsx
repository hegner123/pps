import { useEffect, useState } from "react";

import { Grid } from "../../components/grid";
import { useProject } from "../../hooks/useProject";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();

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
