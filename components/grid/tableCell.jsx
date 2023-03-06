import { useInstrument } from '../../hooks/useInstrument'

export const TableCell = ({ instId }) => {
  const inst = useInstrument(instId)

  const statusClass = inst.status === 'complete' ? 'bg-green-500' : 'bg-red-500'
  return (
    <div
      onClick={() => inst.onclick(instId)}
      className={`${statusClass} cursor-pointer cell p-2`}
      style={{ '--tw-brightness': 0.8 }}
    ></div>
  )
}
