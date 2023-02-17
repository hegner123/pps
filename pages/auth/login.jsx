import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();
  const router = useRouter();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (user) {
    router.push("/dashboard");
  }

  return (
    <main className="bg-slate-50 min-w-full min-h-screen grid place-items-center">
      <div className="w-56  ">
        <Auth
          redirectTo="http://localhost:3000/"
          appearance={{ theme: ThemeSupa }}
          supabaseClient={supabaseClient}
        />
        <a
          className="p-3 bg-black text-white hover:bg-slate-200 text-center"
          href="../">
          Cancel
        </a>
      </div>
    </main>
  );
};

export default LoginPage;
