import { useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

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
    <div className="bg-slate-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60 site-width">
      <div className="content-width ">
        <h1 className="font-bold text-6xl col-start col-start-3 col-end-9 row-start-1">
          ProProject Studio
        </h1>
        <div className="pt-10">
          <div className="grid grid-cols-12 space-x-4">
            <Link
              className="block p-3 bg-black text-white text-center rounded hover:bg-slate-200 hover:text-black border-solid border-black border-2"
              href="/auth/login"
            >
              Login
            </Link>
            <Link
              className="block p-3 bg-black text-white text-center rounded hover:bg-slate-200 hover:text-black border-solid border-black border-2"
              href="/auth/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthRouter
