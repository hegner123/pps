import { useInstrument } from '../../hooks/useInstrument'
import { useEffect, useState } from 'react'
import { gridEditEnabled } from '../../state/store'
import { useAtom } from 'jotai'
import PropTypes from 'prop-types'

export const TableCell = ({ instId }) => {
  const [editEnabled] = useAtom(gridEditEnabled)
  const inst = useInstrument(instId)
  const [instrumentId] = useState(instId)
  const [isDisabled, setIsDisabled] = useState(false)

  function handleCLick (instId) {
    inst?.onclick(instId)
  }

  useEffect(() => {
    setIsDisabled(inst?.active)
  }, [editEnabled])

  const statusClass = inst.status === 'complete' ? 'bg-green-500' : 'bg-red-500'
  return (
    <div
      onClick={() => handleCLick(instrumentId)}
      className={`${statusClass} cursor-pointer cell p-2`}
      style={{ '--tw-brightness': 0.8 }}
    >
      {editEnabled && (
        <input
          type="checkbox"
          name="instrumentActive"
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        />
      )}
    </div>
  )
}

TableCell.propTypes = {
  instId: PropTypes.number
}
