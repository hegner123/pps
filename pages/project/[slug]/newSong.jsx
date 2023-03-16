import { useRouter } from 'next/router'
import { useState } from 'react'

function NewSong () {
  const [arrangement, setArrangement] = useState([])
  const [songName, setSongName] = useState('')
  const [songKey, setSongKey] = useState('')
  const [songTempo, setSongTempo] = useState('')
  const [newInstrument, setNewInstrument] = useState('')
  const [spotifySearch, setSpotifySearch] = useState('')
  const router = useRouter()
  const { slug } = router.query

  function handleOnChange (name) {
    const setter = name.target.name
    const value = name.target.value
    console.log(setter, value)
    switch (setter) {
      case 'songName':
        setSongName(value)
        break
      case 'songKey':
        setSongKey(value)
        break
      case 'songTempo':
        setSongTempo(value)
        break
      case 'setNewInstrument':
        setNewInstrument(value)
        break
      case 'spotifySearch':
        setSpotifySearch(value)
        break
      default:
        break
    }
  }

  function addInstrument (e, instrument, setter) {
    e.preventDefault()
    setArrangement([...arrangement, instrument])
    setter('')
  }

  return (
    <div className="grid grid-cols-12 ">
      <h1 className="col-start-2 col-span-3">New Song for {slug}</h1>
      <button
        className="col-start-2 bg-teal-200 rounded w-fit p-2"
        onClick={() => router.back()}
      >
        Back
      </button>
      <div className="grid grid-cols-12 gap-4 row-start-3 col-span-12">
        <form className="grid col-start-2 col-span-3">
          <label htmlFor="songName">Song Name</label>
          <input
            className="border-2 border-solid border-slate-500  h-8"
            type="text"
            name="songName"
            id="songName"
            value={songName}
            onChange={(name) => handleOnChange(name)}
          />
          <label htmlFor="songKey">Song Key</label>
          <input
            className="border-2 border-solid border-slate-500  h-8"
            type="text"
            name="songKey"
            id="songKey"
            value={songKey}
            onChange={(key) => handleOnChange(key)}
          />
          <label htmlFor="songTempo">Song Tempo</label>
          <input
            className="border-2 border-solid border-slate-500  h-8"
            type="text"
            name="songTempo"
            id="songTempo"
            value={songTempo}
            onChange={(tempo) => handleOnChange(tempo)}
          />
        </form>
        <form className="grid col-start-5 col-span-3 align-items-start m-0">
          <label htmlFor="addInstrument">Add Instrument</label>
          <div className="flex h-8">
            <input
              className="border-2 border-solid border-slate-500 h-8 w-full"
              type="text"
              name="setNewInstrument"
              id="addInstrument"
              value={newInstrument}
              onChange={(instrument) => handleOnChange(instrument)}
            />
            <button
              className="ml-2"
              onClick={(e) => addInstrument(e, newInstrument, setNewInstrument)}
            >
              +
            </button>
          </div>
        </form>
        {arrangement.map((instrument) => {
          return (
            <div key={instrument}>
              <p>{instrument}</p>
            </div>
          )
        })}
        <form className="grid col-start-8 col-span-3">
          <label htmlFor="spotifySearch">Search Spotify</label>
          <input
            className="border-2 border-solid border-slate-500  h-8"
            type="text"
            name="spotifySearch"
            id="spotifySearch"
            value={spotifySearch}
            onChange={(search) => handleOnChange(search)}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  )
}

export default NewSong
