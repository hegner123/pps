import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export const useProject = (router) => {
  const [hasProject, setProject] = useState();
  const [projectSlug, setProjectSlug] = useState();
  const [fetched, setFetched] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
      setProjectSlug(router.query.slug);
    }
  }, [router.isReady]);

  async function getProject(slug) {
    if (slug === undefined) {
      console.log("undefined slug");
      return;
    }
    let { data: Project, error } = await supabase
      .from("Projects")
      .select("*")
      .eq("slug", `${slug}`);

    if (error) console.log("error", error);

    return Project[0];
  }
  if (fetched === false && isReady) {
    getProject(projectSlug)
      .then((data) => {
        setProject(data);
        //   console.log(project);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { hasProject, fetched, projectSlug };
};
