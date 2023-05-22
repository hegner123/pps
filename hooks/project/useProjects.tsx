import { useEffect, useState } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getAllProjects } from '../../supabaseTables/projects'

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [fetched, setFetched] = useState(false)
  const supabaseClient = useSupabaseClient()
  const user :any = useUser()
  const reload = () => {
    setFetched(false)
  }

  useEffect(() => {
    if (fetched === false && user) {
      getAllProjects(user.id, supabaseClient).then((data) => {
        setProjects(data)
        setFetched(true)
        console.log('fetching projects')
      })
    }
  }, [user, fetched , supabaseClient])

  return { projects, fetched, reload }
}
