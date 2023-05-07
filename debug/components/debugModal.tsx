import { ppsStates } from '../../state/store'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const DebugModal = () => {
  const [songDetailData] = useAtom(ppsStates.songDetailsStore)
  const [currentArrangementValue] = useAtom(ppsStates.currentArrangement)
  const [projectIdValue] = useAtom(ppsStates.projectId)
  const [debugValue] = useAtom(ppsStates.debug)
  const [gridEditEnabledValue] = useAtom(ppsStates.gridEditEnabled)
  const [showAlertValue] = useAtom(ppsStates.showAlert)
  const [newSongEditValue] = useAtom(ppsStates.newSongEdit)
  const [newSongObjectValue] = useAtom(ppsStates.newSongObject)
  const [newInstrumentEditValue] = useAtom(ppsStates.newInstrumentEdit)
  const [newInstrumentObjectValue] = useAtom(ppsStates.newInstrumentObject)

  const modalStyle = {
    Position: 'absolute',
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
            </li>

            <li>
              <p className="text-white">projectIdValue: {projectIdValue}</p>
            </li>
            <li>
              <p className="text-white">
                debugValue: {debugValue ? 'true' : 'false'}
              </p>
            </li>
            <li>
              <p className="text-white">
                GridEdit: {gridEditEnabledValue ? 'true' : 'false'}
              </p>
            </li>
            <li>
              <p className="text-white">
                showAlertValue: {showAlertValue ? 'true' : 'false'}
              </p>
            </li>
            <li>
              <p className="text-white">newSongEditValue: {newSongEditValue}</p>
            </li>
            <li>
              <p className="text-white">
                newSongObjectValue: {JSON.stringify(newSongObjectValue)}
              </p>
            </li>
            <li>
              <p className="text-white">
                newInstrumentEditValue: {newInstrumentEditValue}
              </p>
            </li>
            <li>
              <p className="text-white">
                newInstrumentObjectValue:
                {JSON.stringify(newInstrumentObjectValue)}
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default DebugModal
