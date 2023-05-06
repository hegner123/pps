import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'
import DebugUi from '../debug/debug'
import { useRouter } from 'next/router'

const Navigation = () => {
  const user = useUser()
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  function handleLogout () {
    supabaseClient.auth
      .signOut()
      .then((res) => {
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <nav className="flex justify-between py-5 pl-10 pr-20">
      <div>
        {!user
          ? (
          <Link href="/">ProProject Studio</Link>
            )
          : (
          <Link href="/dashboard">ProProject Studio</Link>
            )}
      </div>
      <ul className="flex space-x-5">
        <li>
          {!user
            ? (
            <Link className="font-bold hover:underline" href="/">
              Home
            </Link>
              )
            : (
            <Link className="font-bold hover:underline" href="/dashboard">
              Home
            </Link>
              )}
        </li>
        <li>
          {!user
            ? (
            <Link className="font-bold hover:underline" href="/auth/login">
              Login
            </Link>
              )
            : (
            <span
              className="font-bold hover:underline cursor-pointer"
              onClick={() => handleLogout()}
              role="link"
            >
              Logout
            </span>
              )}
        </li>
        <li>
          <DebugUi />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
