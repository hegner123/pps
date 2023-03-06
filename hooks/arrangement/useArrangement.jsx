import { useEffect, useState } from 'react'
import { updateArrangement, getInstruments } from '../../supabaseTables'
import { currentArrangement, projectId } from '../../state/store'
import { useAtom } from 'jotai'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useArrangement = (songId, arrangementOrder) => {
  const [hasProjectId] = useAtom(projectId)
  const [hasInstruments, setHasInstruments] = useState([])
  const [orderedInstruments, setOrderedInstruments] = useState([])
  const [ready, setReady] = useState(false)
  const [fetched, setFetched] = useState(false)
  const supabaseClient = useSupabaseClient()
  const [arrangedInstruments, setArrangedInstruments] =
    useAtom(currentArrangement)

  function handleUpdateArrangement () {
    updateArrangement(hasProjectId, arrangedInstruments, supabaseClient)
  }

  useEffect(() => {
    getInstruments(songId, supabaseClient).then((data) => {
      setHasInstruments(data)
      setFetched(true)
    })
    function orderInstruments (instruments, projectArrangement) {
      const ordered = []
      projectArrangement?.forEach((order) => {
        instruments.forEach((instrument) => {
          if (instrument.name.toLowerCase() === order.text) {
            ordered.push(instrument)
          }
        })
      })

      return ordered
    }
    if (hasInstruments && fetched) {
      const postOrderedInstruments = orderInstruments(
        hasInstruments,
        arrangementOrder
      )
      if (postOrderedInstruments) {
        setOrderedInstruments(...orderedInstruments, postOrderedInstruments)
        setReady(true)
      }
    }
  }, [songId, fetched])

  return {
    orderedInstruments,
    ready,
    handleUpdateArrangement
  }
}
