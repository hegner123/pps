import { useEffect, useState } from "react";
import { useArrangement } from "../hooks/useArrangement";

export const Grid = ({ songTitles, songIds }) => {
  const [songs, setSongs] = useState([]);
  const arrangement = useArrangement(songIds);

  return (
    <>
      <div></div>
    </>
  );
};
