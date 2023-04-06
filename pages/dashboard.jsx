import { useProjects } from '../hooks/project/useProjects'
import PlusButton from '../components/svg/plusButton'
import ProjectCard from '../components/projectCard'

const Dashboard = () => {
  const userProjects = useProjects()

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
    <main className="grid site-width full-width justify-center min-w-full bg-slate-50 min-h-screen">
      <div className="justify-center min-w-full site-width site-width-rows full-width py-10">
        <div className="flex space-x-5 items-center content-width max-h-maxContent">
          <h1 className="text-3xl ">Dashboard</h1>
          <a href="/dashboard/newProject" className="w-10 ">
            <PlusButton extraClasses={['stroke-black']} />
          </a>
        </div>
        <ul className="grid py-5 site-width content-width">
          {userProjects?.projects?.map((project, i) => (
            <li
              key={project.id}
              className={`col-start col-start-${
                i === 0 ? i + 1 : (i + 1) * 2
              } col-span-2`}
            >
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
