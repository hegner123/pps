import { useRouter } from 'next/router'
import { useState } from 'react'

function NewSong () {
  const [arrangement, setArrangement] = useState([])
  const [songName, setSongName] = useState(' ')
  const [songKey, setSongKey] = useState(' ')
  const [songTempo, setSongTempo] = useState(' ')
  const [newInstrument, setNewInstrument] = useState(' ')
  const [spotifySearch, setSpotifySearch] = useState(' ')
  const router = useRouter()
  const { slug } = router.query

  function addInstrument (instrument, setter) {
    setArrangement([...arrangement, instrument])
    setter('')
  }

  return (
    <div>
      <h1>New Song for {slug}</h1>
      <button onClick={() => router.back()}>Back</button>
      <form>
        <label htmlFor="songName">Song Name</label>
        <input
          className="border-2 border-solid border-slate-500  "
          type="text"
          name="songName"
          id="songName"
          value={songName}
          onChange={(name) => setSongName(name.value)}
        />
        <label htmlFor="songKey">Song Key</label>
        <input
          className="border-2 border-solid border-slate-500  "
          type="text"
          name="songKey"
          id="songKey"
          value={songKey}
          onChange={(key) => setSongKey(key.value)}
        />
        <label htmlFor="songTempo">Song Tempo</label>
        <input
          className="border-2 border-solid border-slate-500  "
          type="text"
          name="songTempo"
          id="songTempo"
          value={songTempo}
          onChange={(tempo) => setSongTempo(tempo.value)}
        />
      </form>
      <form>
        <label htmlFor="addInstrument">Add Instrument</label>
        <input
          className="border-2 border-solid border-slate-500  "
          type="text"
          name="addInstrument"
          id="addInstrument"
          value={newInstrument}
          onChange={(instrument) => setNewInstrument(instrument.value)}
        />
        <button onClick={() => addInstrument(newInstrument, setNewInstrument)}>
          +
        </button>
      </form>
      {arrangement.map((instrument) => {
        return (
          <div key={instrument}>
            <p>{instrument}</p>
          </div>
        )
      })}
      <form>
        <label htmlFor="spotifySearch">Search Spotify</label>
        <input
          className="border-2 border-solid border-slate-500  "
          type="text"
          name="spotifySearch"
          id="spotifySearch"
          value={spotifySearch}
          onChange={(search) => setSpotifySearch(search.value)}
        />
        <button>Search</button>
      </form>
    </div>
  )
}

export default NewSong
