import { useProjects } from "../hooks/useProjects";

function Page() {
  const projects = useProjects();

  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <h1 className="font-bold text-6xl col-start-3 col-end-9 row-start-1">
        Projects
      </h1>
      <ul className="col-start-4 col-end-9 list-disc list-inside">
        {projects.map((project) => (
          <li key={project.id}>
            <a className="underline" href={`/projects/${project.slug}`}>
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
