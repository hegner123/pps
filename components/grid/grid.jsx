import { useEffect, useState } from 'react'
import { useSongs } from '../../hooks/song/useSongs'
import { TableRow } from './tableRow'
import { TableSorting } from './tableSorting'
import PropTypes from 'prop-types'

export const Grid = ({ projectData }) => {
  const songData = useSongs(projectData?.id)
  const [songTitles, setSongTitles] = useState([])

  const [ready, setReady] = useState(false)

  const arrangementOrder = projectData?.arrangement_order?.order.map(
    (inst, i) => {
      return {
        id: i,
        text: inst
      }
    }
  )

  useEffect(() => {
    if (songData.fetched) {
      setReady(true)
      songData?.songs?.forEach((song) => {
        setSongTitles((songTitles) => [...songTitles, song.name])
      })
    }
  }, [songData.fetched])

  return (
    <>
      <div>
        {ready && (
          <TableSorting projectData={arrangementOrder || false}>
            {ready &&
              songData?.songs?.map((song, i) => (
                <TableRow
                  key={songTitles[i]}
                  songTitle={songTitles[i]}
                  songData={song}
                  arrangementOrder={arrangementOrder}
                />
              ))}
          </TableSorting>
        )}
      </div>
    </>
  )
}

Grid.propTypes = {
  projectData: PropTypes.object.isRequired
}
