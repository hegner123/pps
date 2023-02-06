import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const useProjects = (user) => {
  const [projects, setProjects] = useState([]);
  const [fetched, setFetched] = useState(false);

  async function getProjects() {
    let { data: Projects, error } = await supabase
      .from("Projects")
      .select(user || "*");

    if (error) console.log("error", error);

    return Projects;
  }

  getProjects().then((data) => {
    setProjects(data);
    setFetched(true);
  });

  return { projects, fetched };
};
