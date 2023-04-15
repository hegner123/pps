import { songDetailsStore } from '../../state/store'
import { useAtom } from 'jotai'

const SongDetails = () => {
  const [songDetailsData] = useAtom(songDetailsStore)

  return (
    <>
      {songDetailsData.id && (
        <div>
          <h3 className="col-start col-start-3 col-end-7 text-3xl">
            {songDetailsData?.name}
          </h3>
          <div className="col-start col-start-3 col-end-7">
            <ul className="col-start col-start-3 col-end-7 list-disc list-inside">
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
