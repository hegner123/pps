import {
  songDetailsStore,
  currentArrangement,
  projectId,
  debug
} from '../../state/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const DebugModal = () => {
  const [songDetailData] = useAtom(songDetailsStore)
  const [currentArrangementValue] = useAtom(currentArrangement)
  const [projectIdValue] = useAtom(projectId)
  const [debugValue] = useAtom(debug)

  const modalStyle = {
    position: 'absolute',
    justifySelf: 'center',
    alignSelf: 'center'
  }

  useEffect(() => {
    // console.log(currentArrangementValue)
  }, [currentArrangementValue])

  return (
    <>
      {debugValue && (
        <div className="p-5 bg-black rounded w-60" style={modalStyle}>
          <h1 className="text-white">Test</h1>
          <ul>
            <li>
              <p className="text-white">
                SelectedSong: {JSON.stringify(songDetailData)}
              </p>
            </li>
            <li>
              <p className="text-white">
                CurrentArrangement: {JSON.stringify(currentArrangementValue)}
              </p>
              <ul>
                {currentArrangementValue.map((inst) => {
                  return (
                    <li key={inst.text}>
                      <p className="text-white">inst: {inst.text}</p>
                    </li>
                  )
                })}
              </ul>
            </li>

            <li>
              <p className="text-white">projectIdValue: {projectIdValue}</p>
            </li>
            <li>
              <p className="text-white">
                debugValue: {debugValue ? 'true' : 'false'}
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default DebugModal
