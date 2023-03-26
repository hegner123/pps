import { useEffect, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { newSong, getInstruments, getSong } from '../../supabaseTables'

export const useSong = (id) => {
  const [song, setSong] = useState(null)
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  function submitNewSong () {
    newSong(id, supabaseClient).then((data) => {
      setSong(data)
    })
  }

  useEffect(() => {
    if (user) {
      getSong(id, supabaseClient).then((data) => {
        setSong(data)
      })
    }
  }, [user, id])

  useEffect(() => {
    if (song) {
      getInstruments(song.id, supabaseClient).then((data) => {
        setSong({ ...song, instruments: data })
      })
    }
  }, [song])

  return { song, id, submitNewSong }
}
