import { useEffect, useState } from 'react'
import { useSongs } from 'pps/hooks/song/useSongs'
import { TableRow } from './tableRow'
import { newSongObject } from 'pps/state/store'
import { useAtom } from 'jotai'
import { TableSorting } from './tableSorting'
import { SongObject} from 'pps/itemTypes/song'
import PropTypes from 'prop-types'


export const Grid = ({ projectData } : any) => {
  const songData = useSongs(projectData?.id)
  const [songTitles, setSongTitles] = useState<[String]|any >([''])
  const [songDataValue, setSongData] = useState<[SongObject]|any>([""])
  const [, setNewSong] = useAtom(newSongObject)
  // const [needsUpdate, setUpdate] = useAtom(requireUpdate)

  const [ready, setReady] = useState(false)

  const parsedOrder = (jsonData : any) => {
    return JSON.parse(jsonData?.arrangement_order)
  }

  const arrangementOrder = parsedOrder(projectData)?.order?.map((inst : string, i : number) => {
    return {
      id: i,
      text: inst
    }
  })

  useEffect(() => {
    if (songData.fetched) {
      songData?.songs?.forEach((song :SongObject) => {
        setSongTitles((songTitles :[String]) => [...songTitles, song.name])
        setSongData((songDataValue : [SongObject]) => [...songDataValue, song])
        setNewSong(
          (newSong : any) =>
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
  }, [songData.fetched, songData?.songs?.length, projectData?.id, setNewSong , songData?.songs])

  return (
    <>
      <div className="site_grid site-width ">
        {ready
          ? (
          <TableSorting projectData={arrangementOrder || [false]}>
            {ready &&
              songData?.songs?.map((song : any, i : any) => (
                <TableRow
                  key={songTitles[i]}
                  songTitle={songTitles[i]}
                  songID={song?.id}
                  songInfo={songDataValue[i]}
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


