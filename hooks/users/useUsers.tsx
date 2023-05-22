import { useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { getDisplayName } from '../../supabaseTables'

const useUsers = (userId :any) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const supabaseClient = useSupabaseClient()

  useEffect(() => {
    if (!supabaseClient) return
    if (!users) return
    if (!userId) return
    getDisplayName(userId, supabaseClient).then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [ userId, supabaseClient, users])

  return { users, loading }
}

export default useUsers
