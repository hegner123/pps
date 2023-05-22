import { useEffect, useState } from 'react'
import { TableCell } from './tableCell'
import { useAtom } from 'jotai'
import {
  songDetailsStore,
  currentArrangement,
  newInstrumentEdit,
  newSongObject
} from 'pps/state/store'
import { useArrangement } from 'pps/hooks/arrangement/useArrangement'

export const TableRow = ({ songTitle, songID, songInfo } : {songTitle:any, songID:any, songInfo:any}) => {
  const [currentArrangementOrder] = useAtom(currentArrangement)
  const [, setNewSong] = useAtom(newSongObject)
  const [isNewInstrumentEditEnabled] = useAtom(newInstrumentEdit)
  const [, setSelectedInst] = useAtom(songDetailsStore)
  const [isDisabled, setIsDisabled] = useState(false)
  const arrangement = useArrangement(songID, currentArrangementOrder)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (arrangement.ready) setReady(true)
  }, [arrangement])

  function handleChange (active:any, songID:any) {
    setIsDisabled(active)
    setNewSong((newSong : any) => ({
      ...newSong,
      songs: newSong?.songs.map((song :any) => {
        if (song.id === songID) {
          song.active = active
        }
        return song
      })
    }))
  }

  return (
    <>
      {ready && (
        <>
          <div
            className="flex items-center justify-center col-start-1 cursor-pointer cell hover:bg-slate-200"
            onClick={() => setSelectedInst(songInfo)}
          >
            {songTitle}
          </div>
          {arrangement?.orderedInstruments?.map((instrument :any) => (
            <TableCell key={instrument.id} instId={instrument.id} />
          ))}
          <div className={'cursor-pointer cell p-2'}>
            {isNewInstrumentEditEnabled && (
              <input
                type="checkbox"
                name="instrumentActive"
                checked={isDisabled}
                onChange={() => handleChange(!isDisabled, songID)}
              />
            )}
          </div>
        </>
      )}
    </>
  )
}


