import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getAllSongs } from 'pps/supabaseTables/songs'

export const useSongs = (projectId : number) => {
  const router = useRouter()
  const [songs, setSongs] = useState([])
  const [fetched, setFetched] = useState(false)
  const { slug } = router.query
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  useEffect(() => {
    if (fetched === false && user && supabaseClient) {
      getAllSongs(projectId, supabaseClient).then((data) => {
        setSongs(data)
        setFetched(true)
      })
    }
  }, [user, supabaseClient, fetched, projectId])

  return { songs, slug, fetched }
}
