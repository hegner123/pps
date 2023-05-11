import { useState } from 'react'
import PropTypes from 'prop-types'
import { useSong } from 'pps/hooks/song/useSong'

const NewInstrumentModal = ( closeState : any, projectId : any) => {
  const [instrumentName, setInstrumentName] = useState('')
  const songHook = useSong(projectId)

  function submitForm (e) {
    e.preventDefault()
    songHook.submitNewSong([instrumentName])
  }
  return (
    <dialog
      id="newInstrumentModal"
      className="bg-slate-700 p-5 site_grid site-width new-project-container justify-between"
      onCancel={() => console.log('close')}
      open
    >
      <h3 className="col-span-13 text-white">New Instrument</h3>
      <form className="bg-slate-700 grid new-project-form col-span-full">
        <label className="col-span-13 text-white" htmlFor="instrumentName">
          Instrument Name
        </label>
        <input
          type="text"
          id="instrumentName"
          className="col-span-13 pl-1"
          value={instrumentName}
          onChange={(e) => setInstrumentName(e.target.value)}
        />
        <button
          className="bg-slate-500 text-white text-center p-2 rounded-md col-span-6 hover:text-black hover:bg-slate-50 cursor-pointer mt-6"
          type="submit"
          onClick={(e) => submitForm(e)}
        >
          Create
        </button>
        <span
          className="flex items-center justify-center border-slate-500 border-2 text-white text-center p-2 rounded-md col-span-6 hover:text-black hover:bg-slate-50 hover:border-slate-50 mt-6 cursor-pointer"
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
