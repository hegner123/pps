import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

const useRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [error, setError] = useState<any>(null)
  const supabaseClient = useSupabaseClient()

  async function registerUser () {
    const { data, error }= await supabaseClient.auth.signUp({
      email: `${email}`,
      password: `${password}`
    })
    if (error) {
      setError(error)
      return
    }
    console.log(data)
    return data
  }

  function handleSubmit (e:any) {
    e.preventDefault()
    if (password !== passwordConfirmation) {
      setError('Passwords do not match')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    // if (email.includes('@') && email.includes('.')) {
    //   setError('Email must be valid')
    //   return
    // }
    registerUser()
  }

  return {
    email,
    password,
    passwordConfirmation,
    error,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    handleSubmit
  }
}

export default useRegister
