import { use, useEffect, useState } from 'react'
import { Grid } from 'pps/components/grid'
import { useRouter } from 'next/router'
import { useProject } from 'pps/hooks/project/useProject'
import SongDetails from 'pps/components/grid/songDetails'
import NewSongModal from 'pps/components/newSongModal'
import NewInstrumentModal from 'pps/components/newInstrumentModal'
import { useSong } from 'pps/hooks/song/useSong'
import { useArrangement } from 'pps/hooks/arrangement/useArrangement'
import {
  currentArrangement,
  projectId,
  gridEditEnabled,
  showAlert,
  requireUpdate,
  projectHasSongs
} from 'pps/state/store'
import { useAtom } from 'jotai'

import CloseIcon from '../../components/svg/closeIcon'
const SingleProject = () => {
  const [ready, setReady] = useState(false)
  const router = useRouter()
  const [showNewSongModal, setShowNewSongModal] = useState(false)
  const [showNewInstrumentModal, setShowNewInstrumentModal] = useState(false)
  const [showUiAlert, setShowUiAlert] = useAtom(showAlert)
  const [, setArrangementOrder] = useAtom(currentArrangement)
  const [currentProjectId, setProjectId] = useAtom(projectId)
  const [isGridEditable, setIsGridEditable] = useAtom(gridEditEnabled)
  const [hasSongs] = useAtom(projectHasSongs)
  const [needsUpdate] = useAtom(requireUpdate)
  
  const instrumentHook = useArrangement(router.query.slug as any)
  const projectData :any = useProject()

  useEffect(() => {
    if (projectData?.fetched || needsUpdate) {
      setReady(true)
      setArrangementOrder(projectData?.hasProject?.arrangementOrder)
      setProjectId(projectData?.hasProject?.id)
    }
  }, [projectData?.fetched, needsUpdate, projectData?.hasProject?.id, projectData?.hasProject?.arrangementOrder, setArrangementOrder, setProjectId])

  function closeAlert () {
    setShowUiAlert({ show: false, message: '' })
  }

  function saveNewInstrument (instrument : any, id : any) {
    console.log(instrument, id)
    instrumentHook.addInstrument(instrument, id)
  }



  return (
    <div
      className="min-w-full bg-slate-50 site_grid site-width full-width"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <div className="col-start-1 pt-5 col-start site-width max-content-rows site_grid col-span-14">
        <div className="items-end col-span-12 gap-2 site_grid site-width ">
          <h1 className="col-span-4 col-start-2 text-6xl">
            {projectData?.hasProject?.name}
          </h1>
          {hasSongs && (
            <button
              className="flex items-center justify-center h-10 col-span-1 col-start-9 text-white border-black border-solid rounded hover:text-black hover:bg-white hover:border-1 bg-slate-900"
              onClick={() => setShowNewInstrumentModal(!showNewInstrumentModal)}
            >
              New Instrument
            </button>
          )}
          <button
            className="flex items-center justify-center h-10 col-span-1 col-start-10 text-white border-black border-solid rounded hover:text-black hover:bg-white hover:border-1 bg-slate-900"
            onClick={() => setShowNewSongModal(!showNewSongModal)}
          >
            New Song
          </button>
          <button
            className="flex items-center justify-center h-10 col-span-1 col-start-11 text-white border-black border-solid rounded hover:text-black hover:bg-white hover:border-1 bg-slate-900"
            onClick={() => setIsGridEditable(!isGridEditable)}
          >
            Edit
          </button>
          <button
            className="flex items-center justify-center h-10 col-span-1 col-start-12 text-white border-black border-solid rounded hover:text-black hover:bg-white hover:border-1 bg-slate-900"
            onClick={() => setIsGridEditable(!isGridEditable)}
          >
            Settings
          </button>
          {showUiAlert.show && (
            <div className="flex items-center p-5 dark-blue-bg h-7 w-fit">
              <p>{showUiAlert.message}</p>
              <button onClick={() => closeAlert()}>
                <CloseIcon
                  extraClasses={['w-6', 'h-6', 'stroke-white', 'items-start']}
                />
              </button>
            </div>
          )}
        </div>
        <div className="col-span-12 col-start-2 site_grid site-width">
          {ready && (
            <Grid
              projectData={projectData?.hasProject}
            />
          )}
          {ready && <SongDetails />}
          {showNewSongModal && (
            <NewSongModal
              closeState={() => setShowNewSongModal(!showNewSongModal)}
              id = { currentProjectId }
            />
          )}
          {showNewInstrumentModal && (
            <NewInstrumentModal
              closeState={() =>
                setShowNewInstrumentModal(!showNewInstrumentModal)
              }
              id = { currentProjectId }
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleProject
