import { useEffect, useState } from 'react'
import { useSongs } from '../../hooks/song/useSongs'
import { TableRow } from './tableRow'
import { newSongObject } from '../../state/store'
import { useAtom } from 'jotai'
import { TableSorting } from './tableSorting'
import PropTypes from 'prop-types'

export const Grid = ({ projectData }) => {
  const songData = useSongs(projectData?.id)
  const [songTitles, setSongTitles] = useState([])
  const [songDataValue, setSongData] = useState([])
  const [newSong, setNewSong] = useAtom(newSongObject)

  const [ready, setReady] = useState(false)

  const parsedOrder = JSON.parse(projectData?.arrangement_order)

  const arrangementOrder = parsedOrder.order?.map((inst, i) => {
    return {
      id: i,
      text: inst
    }
  })

  useEffect(() => {
    if (songData.fetched) {
      songData?.songs?.forEach((song) => {
        setSongTitles((songTitles) => [...songTitles, song.name])
        setSongData((songDataValue) => [...songDataValue, song])
        setNewSong(
          (newSong) =>
            (newSong = {
              ...newSong,
              songs: [
                ...newSong.songs,
                { id: song.id, active: false, status: 'incomplete' }
              ]
            })
        )
      })

      if (arrangementOrder) setReady(true)
    }
  }, [songData.fetched])

  useEffect(() => {
    console.log(newSong)
  }, [newSong])
  return (
    <>
      <div className="site_grid site-width ">
        {ready && (
          <TableSorting projectData={arrangementOrder || false}>
            {ready &&
              songData?.songs?.map((song, i) => (
                <TableRow
                  key={songTitles[i]}
                  songTitle={songTitles[i]}
                  songID={song?.id}
                  songInfo={songDataValue[i]}
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
