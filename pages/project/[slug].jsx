import { useEffect, useState } from "react";

import { Grid } from "../../components/grid";
import { useProject } from "../../hooks/useProject";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const projectSlug = router.query.slug;
  const projectData = useProject(projectSlug);

  // console.log(songTitles);
  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <h1 className="text-6xl col-start-3 col-end-7">
        {projectData?.hasProject?.name}
      </h1>
      <div className="col-start-3 col-end-7">
          <Grid projectSlug={projectSlug} projectId={projectData?.id}  />
      </div>
    </div>
  );
};

export default Dashboard;
