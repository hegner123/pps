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
  }, [songId, fetched])

  useEffect(() => {
    function orderInstruments (instruments) {
      const ordered = []
      arrangementOrder.forEach((order) => {
        instruments.forEach((instrument) => {
          if (instrument.name.toLowerCase() === order) {
            ordered.push(instrument)
          }
        })
      })

      return ordered
    }
    if (hasInstruments && ready === false && fetched === true) {
      setOrderedInstruments(orderInstruments(hasInstruments))
      setArrangedInstruments(orderedInstruments)
      setReady(true)
    }
  }, [hasInstruments, fetched])

  return {
    arrangedInstruments,
    ready,
    handleUpdateArrangement
  }
}
