import { memo, useEffect } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from '../../itemTypes'
import PropTypes from 'prop-types'
import { debugDrag } from '../../state/store'
import { useAtom } from 'jotai'

export const TableHeader = memo(function Header ({
  id,
  text,
  moveHeader,
  findHeader,
  classes
}) {
  const originalIndex = findHeader(id).index
  const [logDrag] = useAtom(debugDrag)
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.HEADER,
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

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.HEADER,
      hover ({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findHeader(id)
          moveHeader(draggedId, overIndex)
        }
      }
    }),
    [findHeader, moveHeader]
  )

  useEffect(() => {
    if (logDrag) {
      console.log(isDragging)
    }
  }, [isDragging])

  return (
    <div ref={(node) => drag(drop(node))} className={classes}>
      <p>{text}</p>
    </div>
  )
})

TableHeader.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  moveHeader: PropTypes.func.isRequired,
  findHeader: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired
}
