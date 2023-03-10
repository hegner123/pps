import { useEffect, useState, useMemo } from 'react'
import { updateArrangement, getInstruments } from '../../supabaseTables'
import { currentArrangement, projectId } from '../../state/store'
import { useAtom } from 'jotai'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useArrangement = (songId, arrangementOrder) => {
  const [hasProjectId] = useAtom(projectId)
  const [hasInstruments, setHasInstruments] = useState([])
  const [ready, setReady] = useState(false)
  const [fetched, setFetched] = useState(false)
  const supabaseClient = useSupabaseClient()
  const [arrangedInstruments, setArrangedInstruments] =
    useAtom(currentArrangement)
  const orderedInstruments = useMemo(
    () => orderInstruments(hasInstruments, arrangementOrder),
    [hasInstruments, arrangementOrder]
  )

  function orderInstruments (instruments, projectArrangement) {
    if (fetched === false) return false
    let ordered = []
    projectArrangement?.forEach((order) => {
      instruments.forEach((instrument) => {
        if (instrument.name.toLowerCase() !== order.text) return
        ordered.push(instrument)
      })
    })
    setReady(true)
    updateArrangement(arrangedInstruments, hasProjectId, supabaseClient)
      .then((data) => {
        ordered = data
      })
      .catch((error) => {
        console.error(error)
      })
    return ordered
  }

  useEffect(() => {
    getInstruments(songId, supabaseClient).then((data) => {
      setHasInstruments(data)
      setFetched(true)
    })
  }, [songId, fetched, arrangedInstruments])

  return {
    orderedInstruments,
    ready
  }
}
