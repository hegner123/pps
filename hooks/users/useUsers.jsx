import { useState, useEffect } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { getDisplayName } from '../../supabaseTables'

const useUsers = (userId) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const supabaseClient = useSupabaseClient()

  useEffect(() => {
    getDisplayName(userId, supabaseClient).then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  return { users, loading }
}

export default useUsers
