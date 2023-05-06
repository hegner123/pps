import { useEffect, useState } from 'react'
import { useSongs } from 'pps/hooks/song/useSongs'
import { TableRow } from './tableRow'
import { newSongObject } from 'pps/state/store'
import { useAtom } from 'jotai'
import { TableSorting } from './tableSorting'
import PropTypes from 'prop-types'


export const Grid = ({ projectData }) => {
  const songData = useSongs(projectData?.id)
  const [songTitles, setSongTitles] = useState([])
  const [songDataValue, setSongData] = useState([])
  const [, setNewSong] = useAtom(newSongObject)
  // const [needsUpdate, setUpdate] = useAtom(requireUpdate)

  const [ready, setReady] = useState(false)

  const parsedOrder = (jsonData) => {
    return JSON.parse(jsonData?.arrangement_order)
  }

  const arrangementOrder = parsedOrder(projectData)?.order?.map((inst, i) => {
    return {
      id: i,
      text: inst
    }
  })

  useEffect(() => {
    console.log(projectData)
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

      setReady(true)
    }
  }, [songData.fetched])

  return (
    <>
      <div className="site_grid site-width ">
        {ready
          ? (
          <TableSorting projectData={arrangementOrder || [false]}>
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
            )
          : (
          <div className="site_grid site-width">
            <p className="col-start-2">No Songs Yet</p>
          </div>
            )}
      </div>
    </>
  )
}

Grid.propTypes = {
  projectData: PropTypes.object.isRequired
}
