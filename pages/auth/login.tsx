import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLogin } from '../../hooks/auth/useLogin'

const LoginPage = () => {
  const { email, password, error, setEmail, setPassword, handleSubmit } =
    useLogin()

  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [, setData] = useState<any>()
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
  }, [user, supabaseClient])

  return (
    <main className="min-w-full min-h-screen bg-slate-50 place-items-center site-width site_grid">
      <div className="w-full col-span-3 col-start-4">
        <form className="grid w-full grid-cols-2 p-10 bg-slate-600">
          <h4 className="col-span-2 text-4xl text-white">Login</h4>
          {error && <p className="col-span-2 text-red-500">{error}</p>}
          <label className="w-full col-span-2 mt-5 text-white cols-start-2">
            Email:{' '}
          </label>
          <input
            className="w-full col-span-2 p-5 rounded cols-start-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <label className="w-full col-span-2 mt-5 text-white cols-start-2">
            Password:{' '}
          </label>
          <input
            className="w-full col-span-2 p-5 rounded cols-start-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button
            className="p-2 mt-5 text-white bg-black rounded"
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
