import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import JotaiProvider from '../state/store'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DebugModal from '../debug/components/debugModal'
import PropTypes from 'prop-types'
import Navigation from '../components/nav'
import HeadMeta from '../components/head'
import '../styles/style.scss'

function MyApp ({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <>
      <HeadMeta />
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <JotaiProvider>
          <DndProvider backend={HTML5Backend}>
            <Navigation />
            <div className="site_grid site-width">
              <DebugModal />
              <Component {...pageProps} />
            </div>
          </DndProvider>
        </JotaiProvider>
      </SessionContextProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
