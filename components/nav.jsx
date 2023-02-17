import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const Navigation = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  function handleLogout() {
    supabaseClient.auth
      .signOut()
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <nav className="flex justify-between py-5 px-20">
      <div>
        {!user ? (
          <a href="/">ProProject Studio</a>
        ) : (
          <a href="/dashboard">ProProject Studio</a>
        )}
      </div>
      <ul className="flex space-x-5">
        {!user ? (
          <a className="font-bold hover:underline" href="/">
            Home
          </a>
        ) : (
          <a className="font-bold hover:underline" href="/dashboard">
            Home
          </a>
        )}
        <li></li>
        <li>
          {!user ? (
            <a className="font-bold hover:underline" href="/auth/login">
              Login
            </a>
          ) : (
            <span
              className="font-bold hover:underline cursor-pointer"
              onClick={() => handleLogout()}
              role="link">
              Logout
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
