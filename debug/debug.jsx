import { debug } from "../state/store";
import { useAtom } from "jotai";
import { useState } from "react";

const DebugUi = () => {
    const [ debugUi, setDebug ] = useAtom(debug);
    
    const toggleDebug = () => {
        setDebug(!debugUi);
    };
    
    return (
        <div className="debug">
        <button onClick={toggleDebug}>Debug</button>
        
        </div>
    );
    }

    export default DebugUi;