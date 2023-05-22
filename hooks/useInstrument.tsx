import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getInstrument, updateInstrument } from '../supabaseTables'
import { showAlert } from '../state/store'
import { useAtom } from 'jotai'

export const useInstrument = (instId:any) => {
  const [, setShowUiAlert] = useAtom(showAlert)
  const [status, setStatus] = useState()
  const [active, setActive] = useState(false)
  const [ready, setReady] = useState(false)
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  function handleInstrumentUpdate (e :any) {
    let update
    if (status === 'incomplete') {
      update = 'complete'
    } else {
      update = 'incomplete'
    }

    updateInstrument(instId, update, supabaseClient).then((data) => {
      setStatus(data[0].status)
      setShowUiAlert({ show: true, message: 'Instrument updated' })
    })
  }

  useEffect(() => {
    if (instId && ready === false) {
      getInstrument(instId, supabaseClient).then((data) => {
        setStatus(data[0].status)
        setActive(data[0].active)
        setReady(true)
      })
    }
  }, [instId, user, supabaseClient, ready])

  return { status, active, ready, onclick: handleInstrumentUpdate }
}
