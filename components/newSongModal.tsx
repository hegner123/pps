import { useState } from 'react'
import PropTypes from 'prop-types'
import { useAtom } from 'jotai'
import { requireUpdate } from 'pps/state/store'
import { useSong } from 'pps/hooks/song/useSong'

const NewSongModal = ({ closeState , id } : {closeState:any, id:number}) => {
  const [songName, setSongName] = useState('')
  const [, setUpdate] = useAtom(requireUpdate)
  const songHook = useSong(id)

  function submitForm (e : any) {
    e.preventDefault()
    songHook.submitNewSong(songName, id)
    setUpdate(true)
    closeState()
  }
  return (
    <div className="justify-between p-5 bg-slate-700 site_grid site-width new-project-container">
      <h3 className="text-white col-span-13">New Song</h3>
      <form className="grid bg-slate-700 new-project-form col-span-full">
        <label className="block col-span-12 text-white" htmlFor="Name">
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
    </div>
  )
}

export default NewSongModal
