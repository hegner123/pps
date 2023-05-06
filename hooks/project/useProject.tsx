import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getCurrentProject, newProject } from '../../supabaseTables/projects'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useProject = () => {
  const [hasProject, setProject] = useState()
  const [fetched, setFetched] = useState(false)
  const supabaseClient = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    if (fetched === false && router?.query?.slug) {
      getCurrentProject(router?.query?.slug, supabaseClient)
        .then((data) => {
          setProject(data)
          setFetched(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [router])

  return { hasProject, fetched, newProject }
}
