import { memo, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Components } from 'pps/itemTypes/index'
import PropTypes from 'prop-types'
import { debugDrag } from 'pps/state/store'
import { useAtom } from 'jotai'

export const TableHeader = memo(function Header ({
  id,
  text,
  moveHeader,
  findHeader,
  classes
} :any) {
  const [logDrag] = useAtom(debugDrag)
  const originalIndex = findHeader(id).index
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: Components.HEADER,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveHeader(droppedId, originalIndex)
        }
      }
    }),
    [id, originalIndex, moveHeader]
  )

  const [, drop] = useDrop<any>(
    () => ({
      accept: Components.HEADER,
      hover ({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findHeader(id)
          moveHeader(draggedId, overIndex)
        }
      }
    }),
    [findHeader, moveHeader]
  )

  // useEffect(() => {
  //   if (logDrag) {
  //     console.log(isDragging)
  //   }
  // }, [isDragging ,logDrag])

  return (
    <div ref={(node) => drag(drop(node))} className={classes}>
      <p>{text}</p>
    </div>
  )
})


