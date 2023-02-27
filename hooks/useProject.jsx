import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import utils from "../utils";

export const useProject = () => {
  const [hasProject, setProject] = useState();
  const [fetched, setFetched] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();


  const user = useUser();

  async function newProject(form) {
    let formSlug = utils.slugify(form.name);
    if (form === undefined) {
      console.log("undefined form");
      return;
    }
    // console.log("user", user);
    const { data, error } = await supabaseClient
      .from("Projects")
      .insert([
        { name: `${form.name}`, slug: `${formSlug}`, user_ids: [`${user.id}`] },
      ])
      .select();
    if (error) console.log("error", error);
    console.log("data", data);
    return data;
  }

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

    if (fetched === false && router?.query?.slug) {
      getProject(router?.query?.slug)
        .then((data) => {
          setProject(data);
          setFetched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router]);

  return { hasProject, fetched, newProject };
};
