import { useEffect, useState } from 'react'
const useGridStore = (song) => {
  const [selectedSong, setSelectedSong] = useState(0)
  useEffect(() => {
    if (song) {
      setSelectedSong(song)
    }
  }, [song])

  function handleSelectSong (song) {
    setSelectedSong(song)
  }

  return { selectedSong, handleSelectSong }
}

export { useGridStore }
