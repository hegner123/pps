import { useProjects } from "../hooks/useProjects";


function Page() {
  const userProjects = useProjects();

  return (
    <div className="bg-slate-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <div className="col-start-3 col-end-7 pt-5">
        <h1 className="font-bold text-6xl col-start-3 col-end-9 row-start-1">
          ProProject Studio
        </h1>
        <div className="pt-10 space-x-4">
          <a className="p-3 bg-black text-white rounded" href="/auth/login">
            Login
          </a>
          <a className="p-3 bg-black text-white rounded" href="/auth/register">
            Register
          </a>
          <ul className="list-disc list-inside">
            {/* {userProjects?.projects?.map((project) => (
              <li key={project.id}>
                <a className="underline" href={`/project/${project.slug}`}>
                  {project.name}
                </a>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
