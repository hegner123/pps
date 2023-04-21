import { useState } from 'react'
import { useProjects } from '../hooks/project/useProjects'
import PlusButton from '../components/svg/plusButton'
import ProjectCard from '../components/projectCard'
import NewProject from '../components/newProject'

const Dashboard = () => {
  const userProjects = useProjects()
  const [showNewProject, setShowNewProject] = useState(false)

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
    <main className="grid site_grid site-width full-width  min-w-full bg-slate-50 min-h-screen">
      <div className="justify-center min-w-full max-content-rows site_grid site-width py-10">
        <div className="flex space-x-5 items-center content-width max-h-maxContent">
          <h1 className="text-3xl ">Dashboard</h1>
          <div
            onClick={() => setShowNewProject(!showNewProject)}
            className="w-10 cursor-pointer"
          >
            <PlusButton extraClasses={['stroke-black']} />
          </div>
        </div>
        <ul className="grid py-5 site_grid site-width">
          {userProjects?.projects?.map((project, i) => (
            <li
              key={project.id}
              className={`col-start col-start-${
                i === 0 ? i + 2 : (i + 1) * 2
              } col-span-2 max-w-[150px]`}
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
      {showNewProject && (
        <NewProject closeState={() => setShowNewProject(!showNewProject)} />
      )}
    </main>
  )
}

export default Dashboard
