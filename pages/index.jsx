import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

function Page() {
  const [projects, setProjects] = useState([]);
  async function getProjects() {
    let { data: Projects, error } = await supabase.from("Projects").select("*");

    if (error) console.log("error", error);

    return Projects;
  }
  getProjects().then((data) => setProjects(data));

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`/projects/${project.slug}`}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
