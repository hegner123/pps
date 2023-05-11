import { useEffect, useState } from 'react'
import { TableCell } from './tableCell'
import { useAtom } from 'jotai'
import {
  songDetailsStore,
  currentArrangement,
  newInstrumentEdit,
  newSongObject
} from 'pps/state/store'
import PropTypes from 'prop-types'
import { useArrangement } from 'pps/hooks/arrangement/useArrangement'

export const TableRow = ({ songTitle, songID, songInfo }) => {
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

  function handleChange (active, songID) {
    setIsDisabled(active)
    setNewSong((newSong) => ({
      ...newSong,
      songs: newSong.songs.map((song) => {
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
            className="cell hover:bg-slate-200 cursor-pointer col-start-1 flex justify-center items-center"
            onClick={() => setSelectedInst(songInfo)}
          >
            {songTitle}
          </div>
          {arrangement.orderedInstruments?.map((instrument) => (
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

TableRow.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songID: PropTypes.number,
  songInfo: PropTypes.object
}
