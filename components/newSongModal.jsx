import { useState } from 'react'
import PropTypes from 'prop-types'

const NewSongModal = ({ closeState, onSave }) => {
  const [songName, setSongName] = useState('')

  function submitForm (e) {
    e.preventDefault()
    onSave(songName)
  }
  return (
    <div className="bg-slate-700 p-5 site_grid site-width new-project-container justify-between">
      <h3 className="col-span-13 text-white">New Song</h3>
      <form className="bg-slate-700 grid new-project-form col-span-full">
        <label className="text-white block col-span-12" htmlFor="Name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="col-span-12 pl-1"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
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
    </div>
  )
}

export default NewSongModal

NewSongModal.propTypes = {
  closeState: PropTypes.func,
  onSave: PropTypes.func
}
