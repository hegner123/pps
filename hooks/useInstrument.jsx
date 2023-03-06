import { useState, useEffect } from 'react'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { getInstrument, updateInstrument } from '../supabaseTables'

export const useInstrument = (instId) => {
  const [status, setStatus] = useState()
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
      // console.log(data)
      // setStatus(data.status)
    })
  }

  useEffect(() => {
    if (instId && ready === false && user) {
      getInstrument(instId, supabaseClient).then((data) => {
        // console.log(data)
        setStatus(data.status)
      })
    }
  }, [instId, user])

  return { status, ready, onclick: handleInstrumentUpdate }
}
