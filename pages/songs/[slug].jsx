import { useEffect } from "react";
import { useSong } from "../../hooks/useSong";

const Songs = () => {
  const songData = useSong();

 



  return (
    <div className="bg-emerald-50 min-h-screen min-w-full grid grid-cols-12 grid-rows-2 py-60">
      <p>{songData.name}</p>
      
      <ul>
        
      </ul>
    </div>
  );
};

export default Songs;