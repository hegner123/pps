import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";
import JotaiProvider from "../state/store";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navigation from "../components/nav";
import "../styles/globals.css";



function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}>
      <DndProvider backend={HTML5Backend}>
        <JotaiProvider>
          <Navigation />

          <Component {...pageProps} />
        </JotaiProvider>
      </DndProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
