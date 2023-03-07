import { useInstrument } from '../../hooks/useInstrument'
import { useState } from 'react'

export const TableCell = ({ instId }) => {
  const inst = useInstrument(instId)
  const [instrumentId, setInstrumentId] = useState(instId)

  function handleCLick (instId) {
    inst?.onclick(instId)
    console.log('instrumentId: ', instrumentId)
  }

  const statusClass = inst.status === 'complete' ? 'bg-green-500' : 'bg-red-500'
  return (
    <div
      onClick={() => handleCLick(instrumentId)}
      className={`${statusClass} cursor-pointer cell p-2`}
      style={{ '--tw-brightness': 0.8 }}
    ></div>
  )
}
