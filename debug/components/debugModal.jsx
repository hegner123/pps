import {selectedSongInit,currentArrangement,projectId,debug} from "../../state/store";
import { useAtom } from "jotai";
const debugModal = () => {
    
    const [selectedSongInitValue] = useAtom(selectedSongInit)
const [currentArrangementValue] = useAtom(currentArrangement)
const [projectIdValue] = useAtom(projectId)
    const [debugValue] = useAtom(debug)
    const modalStyle={
        position:"absolute",
        justifySelf: "center",
        alignSelf:"center"
    }
    
    
    return <>
    {debugValue &&

        <div className="p-5 bg-black rounded w-60" style={modalStyle}>
    <h1 className="text-white">Test</h1>
    <ul>
        <li>
            <p className="text-white">SelectedSong: {selectedSongInitValue}</p>
        </li>

        <li>
            <p className="text-white">projectIdValue: {projectIdValue}</p>
        </li>
        <li>
            <p className="text-white">debugValue: {debugValue ? "true":"false"}</p>
        </li>

    </ul>

    </div>
    }
    </>
}

export default debugModal