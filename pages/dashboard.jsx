import { useProjects } from '../hooks/project/useProjects'
import PlusButton from '../components/svg/plusButton'

const Dashboard = () => {
  const userProjects = useProjects()

  return (
    <main className="grid grid-cols-12 justify-center min-w-full bg-slate-50 min-h-screen">
      <div className=" justify-center min-w-full col-start-2 col-span-8 py-20">
        <div className="flex space-x-5 items-center">
          <h1 className="text-3xl">Dashboard</h1>
          <a href="/dashboard/newProject" className="w-10 ">
            <PlusButton />
          </a>
        </div>
        <ul className="grid py-5 space-x-3 grid-cols-10">
          {userProjects?.projects?.map((project, i) => (
            <li key={project.id} className={`col-start-${i + 1} `}>
              <a
                className="underline p-4 bg-slate-500 w-fit block text-white rounded hover:bg-slate-50 hover:text-black"
                href={`/project/${project.slug}`}
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Dashboard
