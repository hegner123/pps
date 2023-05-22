import { useState } from 'react'
import PropTypes from 'prop-types'
import { newInstrumentEdit, newInstrumentObject } from 'pps/state/store'
// import { useArrangement } from '../../hooks/arrangement/useArrangement'
import { useAtom } from 'jotai'

const NewInstrument = ({ position, songId } :any) => {
  const [isNewInstrumentEditEnabled, setNewInstrumentEditEnabled] =
    useAtom(newInstrumentEdit)
  const [, setNewInstrumentState] = useAtom(newInstrumentObject)
  const [newInstrumentName, setNewInstrumentName] = useState<any>('')
  // const globalArrangement = useArrangement(songId)

  function handleInstrumentNameChange (e :any) {
    setNewInstrumentName(e.target.value)
    setNewInstrumentState((newInstrument) => ({
      ...newInstrument,
      name: e.target.value
    }))
  }

  function handleInstrumentNameSubmit (e:any) {
    console.log('submitting new instrument name', newInstrumentName)
    // globalArrangement.addInstrument(newInstrumentName)
  }
  return (
    <div
      className={'capitalize  row-start-1 text-center flex justify-center '}
      style={{ gridColumn: position, gridRowStart: '1' }}
    >
      {!isNewInstrumentEditEnabled && (
        <button
          className="px-4 py-2 font-bold rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
          onClick={() => setNewInstrumentEditEnabled(true)}
        >
          New Instrument
        </button>
      )}
      {isNewInstrumentEditEnabled && (
        <>
          <input
            className="px-4 py-2 font-bold rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
            type="text"
            name="add-instrument"
            value={newInstrumentName}
            onChange={(e) => handleInstrumentNameChange(e)}
          />
          <button
            className="px-4 py-2 ml-1 font-bold bg-green-300 rounded hover:bg-green-500 text-slate-800"
            onClick={() => handleInstrumentNameSubmit(newInstrumentName)}
          >
            ✓
          </button>
          <button
            className="px-4 py-2 ml-1 font-bold rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
            onClick={() => setNewInstrumentEditEnabled(false)}
          >
            X
          </button>
        </>
      )}
    </div>
  )
}

export default NewInstrument

NewInstrument.propTypes = {
  position: PropTypes.number,
  songId: PropTypes.number
}
