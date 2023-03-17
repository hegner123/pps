import { useEffect, useState } from 'react'
import { TableCell } from './tableCell'
import { useAtom } from 'jotai'
import { songDetailsStore, currentArrangement } from '../../state/store'
import PropTypes from 'prop-types'
import { useArrangement } from '../../hooks/arrangement/useArrangement'

export const TableRow = ({ songTitle, songID, songInfo }) => {
  const [currentArrangementOrder] = useAtom(currentArrangement)
  const arrangement = useArrangement(songID, currentArrangementOrder)
  const [ready, setReady] = useState(false)
  const [, setSelectedInst] = useAtom(songDetailsStore)

  useEffect(() => {
    if (arrangement.ready) setReady(true)
  }, [arrangement])

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
          <div className={'cursor-pointer cell p-2'}></div>
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
