import { useInstrument } from '../../hooks/useInstrument'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const TableCell = ({ instId }) => {
  const inst = useInstrument(instId)
  const [instrumentId] = useState(instId)

  function handleCLick (instId) {
    inst?.onclick(instId)
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

TableCell.propTypes = {
  instId: PropTypes.number
}
