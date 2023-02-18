import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import JotaiProvider from "../state/store";


import Navigation from "../components/nav";
import "../styles/globals.css";



function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}>
      <JotaiProvider>
        <Navigation />
        
        <Component {...pageProps} />
      </JotaiProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
