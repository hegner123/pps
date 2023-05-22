import { useEffect, useState } from 'react'
import { useProjects } from '../hooks/project/useProjects'
import { useAtom } from 'jotai'
import { requireUpdate } from '../state/store'
import PlusButton from '../components/svg/plusButton'
import ProjectCard from '../components/projectCard'
import NewProject from '../components/newProject'

const Dashboard = () => {
  const userProjects = useProjects()
  const [needsUpdate, setNeedsUpdate] = useAtom(requireUpdate)
  const [showNewProject, setShowNewProject] = useState(false)

  function formatDate (times :any) {
    const dateObject = new Date(times)
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
    const date = new Intl.DateTimeFormat('en-US', options as any).format(dateObject)
    return date
  }

  useEffect(() => {
    if (needsUpdate) {
      userProjects.reload()
      setNeedsUpdate(false)
    }
  }, [needsUpdate, setNeedsUpdate, userProjects])

  return (
    <main className="grid min-w-full min-h-screen site_grid site-width full-width bg-slate-50">
      <div className="justify-center min-w-full py-10 max-content-rows site_grid site-width">
        <div className="flex items-center space-x-5 content-width max-h-maxContent">
          <h1 className="text-3xl ">Dashboard</h1>
          <div
            onClick={() => setShowNewProject(!showNewProject)}
            className="w-10 cursor-pointer"
          >
            <PlusButton extraClasses={['stroke-black']} />
          </div>
        </div>
        <ul className="grid py-5 site_grid site-width">
          {userProjects?.projects?.map((project:any, i) => (
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
        <NewProject close={() => setShowNewProject(!showNewProject)} />
      )}
    </main>
  )
}

export default Dashboard
