import { useEffect, useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";


export const useProjects = (userId, project) => {
  const [projects, setProjects] = useState([]);
  const [fetched, setFetched] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    async function getProjects() {
      let { data: Projects, error } = await supabaseClient
        .from("Projects")
        .select("*")
        .overlaps("user_ids", [
          userId || "89448e16-0162-4158-a740-b260c785c070",
        ]);
      // .eq("slug", `${project}`);

      if (error) console.log("error", error);

      return Projects;
    }
    if (fetched === false && user) {
      getProjects().then((data) => {
        setProjects(data);
        setFetched(true);
      });
    }
  }, [user]);

  return { projects, fetched };
};
