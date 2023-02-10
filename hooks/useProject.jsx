import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useProject = (projectSlug) => {
  const [hasProject, setProject] = useState();
  const [fetched, setFetched] = useState(false);

  async function getProject(slug) {
    let { data: Project, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("slug", `${slug}`);

    if (error) console.log("error", error);

    return Project[0];
  }
  if (fetched === false) {
    getProject(projectSlug).then((data) => {
      setProject(data);
      //   console.log(project);
      setFetched(true);
    });
  }

  return { hasProject, fetched };
};
