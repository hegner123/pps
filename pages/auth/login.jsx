import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLogin } from '../../hooks/auth/useLogin'

const LoginPage = () => {
  const { email, password, error, setEmail, setPassword, handleSubmit } =
    useLogin()

  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [, setData] = useState()
  const router = useRouter()

  if (user) {
    router.push('/dashboard/')
  }

  useEffect(() => {
    async function loadData () {
      const { data } = await supabaseClient.from('test').select('*')
      setData(data)
    }

    if (user) loadData()
  }, [user])

  return (
    <main className="bg-slate-50 min-w-full min-h-screen place-items-center site-width site_grid">
      <div className="col-start-4 col-span-3 w-full">
        <form className="bg-slate-600 w-full p-10 grid grid-cols-2">
          <h4 className="text-4xl text-white col-span-2">Login</h4>
          {error && <p className="text-red-500 col-span-2">{error}</p>}
          <label className="cols-start-2 col-span-2 w-full text-white mt-5">
            Email:{' '}
          </label>
          <input
            className="cols-start-2 col-span-2 w-full rounded p-5"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <label className="cols-start-2 col-span-2 w-full text-white mt-5">
            Password:{' '}
          </label>
          <input
            className="cols-start-2 col-span-2 w-full rounded p-5"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button
            className="bg-black text-white p-2 rounded mt-5"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default LoginPage
