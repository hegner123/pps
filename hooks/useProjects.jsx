import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useProjects = (user, project) => {
  const [projects, setProjects] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function getProjects() {
    let { data: Projects, error } = await supabase
      .from("Projects")
      .select("*")
      .overlaps("user_ids", [user || "89448e16-0162-4158-a740-b260c785c070"]);
    // .eq("slug", `${project}`);

    if (error) console.log("error", error);

    return Projects;
  }
  if (fetched === false) {
    getProjects().then((data) => {
      setProjects(data);
      setFetched(true);
    });
  }

  return { projects, fetched };
};
