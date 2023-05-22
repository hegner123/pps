import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSong } from 'pps/hooks/song/useSong'

const NewInstrumentModal = ( {closeState , id }:{closeState:any,id:any}) => {
  const [instrumentName, setInstrumentName] = useState('')
  const songHook = useSong(id)

  function submitForm (e :any) {
    e.preventDefault()
    songHook.submitNewSong(instrumentName,id)
  }
  return (
    <dialog
      id="newInstrumentModal"
      className="justify-between p-5 bg-slate-700 site_grid site-width new-project-container"
      onCancel={() => console.log('close')}
      open
    >
      <h3 className="text-white col-span-13">New Instrument</h3>
      <form className="grid bg-slate-700 new-project-form col-span-full">
        <label className="text-white col-span-13" htmlFor="instrumentName">
          Instrument Name
        </label>
        <input
          type="text"
          id="instrumentName"
          className="pl-1 col-span-13"
          value={instrumentName}
          onChange={(e) => setInstrumentName(e.target.value)}
        />
        <button
          className="col-span-6 p-2 mt-6 text-center text-white rounded-md cursor-pointer bg-slate-500 hover:text-black hover:bg-slate-50"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Create
        </button>
        <span
          className="flex items-center justify-center col-span-6 p-2 mt-6 text-center text-white border-2 rounded-md cursor-pointer border-slate-500 hover:text-black hover:bg-slate-50 hover:border-slate-50"
          onClick={() => closeState()}
        >
          Cancel
        </span>
      </form>
    </dialog>
  )
}

export default NewInstrumentModal

NewInstrumentModal.propTypes = {
  closeState: PropTypes.func,
  onSave: PropTypes.func
}
