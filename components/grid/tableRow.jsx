import { useEffect, useState } from 'react'
import { TableCell } from './tableCell'
import { useAtom } from 'jotai'
import {
  songDetailsStore,
  currentArrangement,
  newSongEdit,
  newSongObject
} from '../../state/store'
import PropTypes from 'prop-types'
import { useArrangement } from '../../hooks/arrangement/useArrangement'

export const TableRow = ({ songTitle, songID, songInfo }) => {
  const [currentArrangementOrder] = useAtom(currentArrangement)
  const [, setNewSong] = useAtom(newSongObject)
  const [isNewSongEditEnabled] = useAtom(newSongEdit)
  const [isDisabled, setIsDisabled] = useState(false)
  const arrangement = useArrangement(songID, currentArrangementOrder)
  const [ready, setReady] = useState(false)
  const [, setSelectedInst] = useAtom(songDetailsStore)

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
            className="cell hover:bg-slate-200 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedInst(songInfo)}
          >
            {songTitle}
          </div>
          {arrangement.orderedInstruments?.map((instrument) => (
            <TableCell key={instrument.id} instId={instrument.id} />
          ))}
          <div className={'cursor-pointer cell p-2'}>
            {isNewSongEditEnabled && (
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
