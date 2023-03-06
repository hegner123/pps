import { useEffect, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getSong } from '../../supabaseTables/songs'

export const useSong = (id) => {
  const [song, setSong] = useState(null)
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  useEffect(() => {
    if (user) {
      getSong(id, supabaseClient).then((data) => {
        setSong(data)
      })
    }
  }, [user, id])

  return { song, id }
}
