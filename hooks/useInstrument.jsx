import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getInstrument, updateInstrument } from '../supabaseTables'

export const useInstrument = (instId) => {
  const [status, setStatus] = useState()
  const [active, setActive] = useState(false)
  const [ready, setReady] = useState(false)
  const supabaseClient = useSupabaseClient()
  const user = useUser()

  function handleInstrumentUpdate (e) {
    let update
    if (status === 'incomplete') {
      update = 'complete'
    } else {
      update = 'incomplete'
    }

    updateInstrument(instId, update, supabaseClient).then((data) => {
      setStatus(data[0].status)
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
  }, [instId, user])

  return { status, active, ready, onclick: handleInstrumentUpdate }
}
