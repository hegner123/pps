import { useState } from 'react'
import { useSong } from '../../hooks/useSong'

const NewSong = () => {
  const songActions = useSong()
  const [songName, setSongName] = useState('')
  const [songBpm, setSongBpm] = useState('')
  const [songLyrics, setSongLyrics] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = {
      name: songName,
      bpm: songBpm,
      lyrics: songLyrics,
    }
    songActions.newSong(form)
  }

  return (
    <>
      <form>
        <label htmlFor='songName'>Song Name</label>
        <input
          type='text'
          name='songName'
          id='songName'
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />

        <label htmlFor='songBpm'>Song BPM</label>
        <input
          type='text'
          name='songBpm'
          id='songBpm'
          value={songBpm}
          onChange={(e) => setSongBpm(e.target.value)}
        />
        <label htmlFor='songLyrics'>Song Lyrics</label>
        <input
          type='text'
          name='songLyrics'
          id='songLyrics'
          value={songLyrics}
          onChange={(e) => setSongLyrics(e.target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}

export default NewSong
