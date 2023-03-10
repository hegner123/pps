import { useEffect, useState } from 'react'
import { TableCell } from './tableCell'
import { useAtom } from 'jotai'
import { selectedSongInit, currentArrangement } from '../../state/store'
import PropTypes from 'prop-types'
import { useArrangement } from '../../hooks/arrangement/useArrangement'

export const TableRow = ({ songTitle, songID }) => {
  const [currentArrangementOrder] = useAtom(currentArrangement)
  const arrangement = useArrangement(songID, currentArrangementOrder)
  const [ready, setReady] = useState(false)
  const [selectedInst, setSelectedInst] = useAtom(selectedSongInit)

  useEffect(() => {
    if (arrangement.ready) setReady(true)
  }, [arrangement])

  return (
    <>
      {ready && (
        <>
          <div
            className="cell hover:bg-slate-200 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedInst(songID)}
          >
            {songTitle}
          </div>
          {arrangement.orderedInstruments?.map((instrument) => (
            <TableCell key={instrument.id} instId={instrument.id} />
          ))}
        </>
      )}
    </>
  )
}

TableRow.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songID: PropTypes.number
}
