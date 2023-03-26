import { useState } from 'react'
import PropTypes from 'prop-types'
import { newInstrumentEdit, newInstrumentObject } from '../../state/store'
import { useArrangement } from '../../hooks/arrangement/useArrangement'
import { useAtom } from 'jotai'

const NewInstrument = ({ position, songId }) => {
  const [isNewInstrumentEditEnabled, setNewInstrumentEditEnabled] =
    useAtom(newInstrumentEdit)
  const [, setNewInstrumentState] = useAtom(newInstrumentObject)
  const [newInstrumentName, setNewInstrumentName] = useState('')
  const globalArrangement = useArrangement(songId)

  function handleInstrumentNameChange (e) {
    setNewInstrumentName(e.target.value)
    setNewInstrumentState((newInstrument) => ({
      ...newInstrument,
      name: e.target.value
    }))
  }

  function handleInstrumentNameSubmit (e) {
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
          className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded"
          onClick={() => setNewInstrumentEditEnabled(true)}
        >
          +
        </button>
      )}
      {isNewInstrumentEditEnabled && (
        <>
          <input
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded"
            type="text"
            name="add-instrument"
            value={newInstrumentName}
            onChange={(e) => handleInstrumentNameChange(e)}
          />
          <button
            className="bg-green-300 hover:bg-green-500 text-slate-800 font-bold py-2 px-4 rounded ml-1"
            onClick={() => handleInstrumentNameSubmit()}
          >
            ✓
          </button>
          <button
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded ml-1"
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
