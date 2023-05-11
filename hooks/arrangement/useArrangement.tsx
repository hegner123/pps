import { useEffect, useState, useMemo } from 'react'
import {
  updateArrangement,
  getInstruments,
  deleteInstrument
} from 'pps/supabaseTables'
import { currentArrangement, projectId } from 'pps/state/store'
import { useAtom } from 'jotai'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export const useArrangement = (songId : number, arrangementOrder : any) => {
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

  function orderInstruments (instruments : string[], projectArrangement: string[]) {
    if (fetched === false) return false
    if (!instruments) return
    if (!projectArrangement) return
    let ordered : any[]= []
    projectArrangement?.forEach((order) => {
      instruments.forEach((instrument) => {
        if (instrument.name.toLowerCase() !== order.text) return
        ordered.push(instrument)
      })
    })
    setReady(true)
    if (ordered.length === 0) return
    updateArrangement(arrangedInstruments, hasProjectId, supabaseClient)
      .then((data) => {
        ordered = data
      })
      .catch((error) => {
        console.error(error)
      })
    return ordered
  }

  function addInstrument (instrument : string, songId : number) {
    let updatedData : any[] = []
    updateArrangement(instrument, songId, supabaseClient)
      .then((data) => {
        updatedData = data
      })
      .catch((error) => {
        console.error(error)
      })
    return updatedData
  }

  function removeInstrument (arrangement : string[], instrument : any) {
    const updatedArrangement = arrangement.filter((item) => {
      return item.name !== instrument.name
    })
    deleteInstrument(instrument.id, supabaseClient)
      .then((data) => {
        setHasInstruments(data)
        updateArrangement(updatedArrangement, hasProjectId, supabaseClient)
          .then((data) => {
            setArrangedInstruments(data)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    if (!songId) return
    if (!arrangementOrder) return
    getInstruments(songId, supabaseClient).then((data) => {
      setHasInstruments(data)
      setFetched(true)
    })
  }, [songId, fetched, arrangedInstruments])

  return {
    orderedInstruments,
    ready,
    addInstrument,
    removeInstrument
  }
}
