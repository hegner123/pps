import { memo } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../itemTypes";

import { useArrangement } from "../../hooks/useArrangement";

export const TableHeader = memo(function Header({
  id,
  text,
  moveHeader,
  findHeader,
  classes,
}) {
  
  const originalIndex = findHeader(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.HEADER,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveHeader(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveHeader]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.HEADER,
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findHeader(id);
          moveHeader(draggedId, overIndex);
        }
      },
    }),
    [findHeader, moveHeader]
  );

  return (
    <div ref={(node) => drag(drop(node))} className={classes}>
      {text}
    </div>
  );
});
