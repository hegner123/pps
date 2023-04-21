import update from 'immutability-helper'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { TableHeader } from './tableHeader'
import { ItemTypes } from '../../itemTypes'
import { useAtom } from 'jotai'
import NewInstrument from './newInstrument'
import { currentArrangement } from '../../state/store'
import PropTypes from 'prop-types'

export const TableSorting = memo(function Container (props) {
  const [, setArrangementOrder] = useAtom(currentArrangement)
  const [dropped, setDropped] = useState(true)
  const [headers, setHeaders] = useState(props.projectData)
  const arrangementLength = headers?.length
  const findHeader = useCallback(
    (id) => {
      const header = headers.filter((c) => `${c.id}` === id)[0]
      return {
        header,
        index: headers.indexOf(header)
      }
    },
    [headers]
  )
  const moveHeader = useCallback(
    (id, atIndex) => {
      setDropped(false)
      const { header, index } = findHeader(id)
      setHeaders(
        update(headers, {
          $splice: [
            [index, 1],
            [atIndex, 0, header]
          ]
        })
      )
      setDropped(true)
    },
    [findHeader, headers, setHeaders]
  )
  const [, drop] = useDrop(() => ({ accept: ItemTypes.HEADER }))
  useEffect(() => {
    if (dropped) {
      setArrangementOrder(headers)
      return
    }
    setArrangementOrder(false)
  }, [headers])

  function calcGrid (cols) {
    let grid = '150px'
    for (let i = 0; i < cols.length; i++) {
      grid += ' 1fr '
    }
    grid += '100px'
    console.log(grid)
    return grid
  }

  return (
    <div
      ref={drop}
      className="grid gap-1 content-width"
      style={{
        gridTemplateColumns: calcGrid(headers)
      }}
    >
      <div className="col-start col-start-1 col-span-1 row-start-1"></div>
      {headers?.map((header, i) => (
        <TableHeader
          classes={`capitalize col-start-${
            i + 2
          } row-start-1 text-center flex justify-center items-center`}
          key={header.id}
          id={`${header.id}`}
          text={header.text}
          moveHeader={moveHeader}
          findHeader={findHeader}
        />
      ))}
      <NewInstrument position={arrangementLength + 2} />
      {props.children}
    </div>
  )
})

TableSorting.propTypes = {
  props: PropTypes.string,
  children: PropTypes.any,
  projectData: PropTypes.array
}
