import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

export const useProject = (router) => {
  const [hasProject, setProject] = useState();
  const [projectSlug, setProjectSlug] = useState();
  const [fetched, setFetched] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
      setProjectSlug(router.query.slug);
    }
  }, [router.isReady]);

  useEffect(() => {
    async function getProject(slug) {
      if (slug === undefined) {
        console.log("undefined slug");
        return;
      }

      let { data: Project, error } = await supabaseClient
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

          setFetched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isReady]);

  return { hasProject, fetched, projectSlug };
};
