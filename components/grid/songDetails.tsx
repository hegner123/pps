import { songDetailsStore, gridEditEnabled } from 'pps/state/store'
import SongDetailsEdit from '../forms/songEdit'
import { useAtom } from 'jotai'

const SongDetails = () => {
  const [songDetailsEdit] = useAtom(gridEditEnabled)
  const [songDetailsData] = useAtom(songDetailsStore)

  return (
    <>
      {songDetailsData.id && (
        <div className="site_grid site-width">
          {songDetailsEdit ? (
            <SongDetailsEdit/>
          ) : (          
          <h3 className="col-start-2 col-end-9 text-3xl">
          {songDetailsData?.name}
        </h3>
        )}
          <div className="col-start-2 col-end-9">
            <ul className="col-start-3 col-end-7 list-disc list-inside col-start">
              <li>
                <p className="inline">{songDetailsData?.slug}</p>
              </li>
              <li>
                <p className="inline">BPM: {songDetailsData?.bpm}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default SongDetails
