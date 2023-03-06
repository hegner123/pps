import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import JotaiProvider from '../state/store'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DebugModal from '../debug/components/debugModal'

import Navigation from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}>
          <JotaiProvider>
            <DndProvider backend={HTML5Backend}>
              <Navigation />
              <div style={{display:'grid'}}>
              <DebugModal />
              <Component {...pageProps} />
              </div>
            </DndProvider>
          </JotaiProvider>
      </SessionContextProvider>
    
  )
}

export default MyApp
