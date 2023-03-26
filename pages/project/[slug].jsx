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
import EditIcon from '../../components/svg/editIcon'
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
      className="bg-slate-50  min-w-full grid grid-cols-12  py-60"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="col-start-3 col-span-6 pt-5">
        <div className="flex">
          <h1 className="text-6xl ">{projectData?.hasProject?.name}</h1>
          <button
            onClick={() => setIsGridEditable(!isGridEditable)}
            className="w-6 h-6 border-solid border-black border-2 rounded flex justify-center items-center"
          >
            <EditIcon extraClasses={['w-6', 'h-6', 'stroke-black']} />
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

        <div className="col-start-3 col-end-7">
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
