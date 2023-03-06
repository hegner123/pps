import { useEffect, useState } from 'react'

import { TableCell } from './tableCell'
import { useAtom, useSetAtom } from 'jotai'
import { selectedSongInit, currentArrangement } from '../../state/store'
import PropTypes from 'prop-types'

export const TableRow = ({ songTitle, songData }) => {
  const arrangement = useAtom(currentArrangement)

  const [ready, setReady] = useState(false)
  const setSelectedInst = useSetAtom(selectedSongInit)

  useEffect(() => {
    if (arrangement[0]?.length > 0) {
      setReady(true)
      // console.log('arrangement', arrangement)
    }
  }, [arrangement])

  return (
    <>
      {ready && (
        <>
          <div
            className="cell hover:bg-slate-200 cursor-pointer flex justify-center items-center"
            onClick={() => setSelectedInst(songData?.id)}
          >
            {songTitle}
          </div>
          {arrangement[0].length > 0 &&
            arrangement[0]?.map((instrument) => (
              <TableCell key={instrument.id} instId={instrument?.id + 1} />
            ))}
        </>
      )}
    </>
  )
}

TableRow.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songData: PropTypes.object.isRequired
}
