import { useEffect, useState } from 'react'
import { Grid } from '../../components/grid/'
import { useProject } from '../../hooks/project/useProject'
import SongDetails from '../../components/grid/songDetails'
import {
  currentArrangement,
  projectId,
  gridEditEnabled,
  showAlert
} from '../../state/store'
import { useAtom } from 'jotai'

import CloseIcon from '../../components/svg/closeIcon'
const SingleProject = () => {
  const [showUiAlert, setShowUiAlert] = useAtom(showAlert)
  const [, setArrangementOrder] = useAtom(currentArrangement)
  const [, setProjectId] = useAtom(projectId)
  const [isGridEditable, setIsGridEditable] = useAtom(gridEditEnabled)
  const [ready, setReady] = useState(false)

  const projectData = useProject()
  useEffect(() => {
    if (projectData?.fetched) {
      setReady(true)

      setArrangementOrder(projectData?.hasProject?.arrangementOrder)
      setProjectId(projectData?.hasProject?.id)
    }
  }, [projectData?.fetched])

  function closeAlert () {
    setShowUiAlert({ show: false, message: '' })
  }

  return (
    <div
      className="bg-slate-50 site_grid min-w-full site-width full-width"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="col-start site-width max-content-rows site_grid col-start-1 col-span-14 pt-5">
        <div className="site_grid site-width items-end col-span-12 gap-2 ">
          <h1 className="text-6xl col-start-2 col-span-4">
            {projectData?.hasProject?.name}
          </h1>
          <button
            className="h-10 border-solid border-black hover:text-black hover:bg-white hover:border-1 rounded flex justify-center items-center col-start-11 col-span-1 bg-slate-900 text-white"
            onClick={() => setIsGridEditable(!isGridEditable)}
          >
            Edit
          </button>
          <button
            className="h-10 border-solid border-black hover:text-black hover:bg-white hover:border-1 rounded flex justify-center items-center col-start-12 col-span-1 bg-slate-900 text-white"
            onClick={() => setIsGridEditable(!isGridEditable)}
          >
            Settings
          </button>
          {showUiAlert.show && (
            <div className="dark-blue-bg flex h-7 w-fit p-5 items-center">
              <p>{showUiAlert.message}</p>
              <button onClick={() => closeAlert()}>
                <CloseIcon
                  extraClasses={['w-6', 'h-6', 'stroke-white', 'items-start']}
                />
              </button>
            </div>
          )}
        </div>

        <div className="site_grid site-width col-start-2 col-span-12">
          {ready && (
            <Grid
              projectSlug={projectData?.projectSlug}
              projectData={projectData?.hasProject}
            />
          )}
          {ready && <SongDetails />}
        </div>
      </div>
    </div>
  )
}

export default SingleProject
