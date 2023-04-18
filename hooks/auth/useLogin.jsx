import { useState } from 'react'
import { loginUser } from '../../supabaseTables'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const supabaseClient = useSupabaseClient()

  function handleSubmit (e) {
    e.preventDefault()
    try {
      loginUser(email, password, supabaseClient)
    } catch (err) {
      setError(err)
    }
  }

  return { email, password, error, setEmail, setPassword, handleSubmit }
}
