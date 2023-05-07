import { useEffect, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { newSong, getInstruments, getSong } from '../../supabaseTables'
import { Song } from 'pps/itemTypes/song'

export const useSong = (id : number) => {
  const [song, setSong] = useState({} as Song | null)
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  function submitNewSong (songName : string, projectId : number) {
    newSong(songName, projectId, supabaseClient).then((data) => {
      setSong(data)
    })
  }

  useEffect(() => {
    if (user && id && supabaseClient) {
      getSong(id, supabaseClient).then((data : any) => {
        setSong(data)
      })
    }
  }, [user, id, supabaseClient])

  useEffect(() => {
    if (song && supabaseClient) {
      getInstruments(song.id, supabaseClient).then((data) => {
        setSong({ ...song, instruments: data })
      })
    }
  }, [song, supabaseClient])

  return { song, id, submitNewSong }
}
