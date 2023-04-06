import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const AuthRouter = () => {
  const user = useUser()
  const router = useRouter()
  if (user) {
    // console.log(user)
    router.push('/dashboard/')
  }
  return <Homepage />
}

const Homepage = () => {
  return (
    <div className="bg-slate-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <div className="col-start col-start-3 col-end-7 pt-5">
        <h1 className="font-bold text-6xl col-start col-start-3 col-end-9 row-start-1">
          ProProject Studio
        </h1>
        <div className="pt-10 ">
          <div className="p-5 space-x-4">
            <a className="p-3 bg-black text-white rounded" href="/auth/login">
              Login
            </a>
            <a
              className="p-3 bg-black text-white rounded"
              href="/auth/register"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthRouter
