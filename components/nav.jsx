import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

const Navigation = () => {
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  return (
    <nav className="flex justify-between py-5 px-20">
      <div>
        <a href="/">ProProject Studio</a>
      </div>
      <ul className="flex space-x-5">
        <li>
          <a className="font-bold hover:underline" href="/">
            Home
          </a>
        </li>
        <li>
          {!user ? (
            <a className="font-bold hover:underline" href="/auth/login">
              Login
            </a>
          ) : (
            <span
              className="font-bold hover:underline cursor-pointer"
              onClick={() => supabaseClient.auth.signOut()}
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
