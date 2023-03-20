import { useProjects } from '../hooks/project/useProjects'
import PlusButton from '../components/svg/plusButton'
import ProjectCard from '../components/projectCard'

const Dashboard = () => {
  const userProjects = useProjects()
  console.log(userProjects)
  function formatDate (times) {
    const dateObject = new Date(times)
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    const date = new Intl.DateTimeFormat('en-US', options).format(dateObject)
    return date
  }

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
              <ProjectCard
                date={formatDate(project.created_at)}
                projectName={project.name}
                author={project.user_ids[0]}
                songCount={project.songCount}
                link={`/project/${project.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Dashboard
