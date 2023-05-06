import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getAllSongs } from '../../supabaseTables/songs'

export const useSongs = (projectId) => {
  const router = useRouter()
  const { slug } = router.query
  const [songs, setSongs] = useState([])
  const [fetched, setFetched] = useState(false)
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  useEffect(() => {
    if (fetched === false && user) {
      getAllSongs(projectId, supabaseClient).then((data) => {
        setSongs(data)
        setFetched(true)
      })
    }
  }, [user])

  return { songs, slug, fetched }
}
