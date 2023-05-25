import update from 'immutability-helper'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { TableHeader } from './tableHeader'
import { Components } from 'pps/itemTypes/index'
import { useAtom } from 'jotai'
import { currentArrangement } from 'pps/state/store'


export const TableSorting = memo(function Container (props:any) {
  const [, setArrangementOrder] = useAtom(currentArrangement)
  const [dropped, setDropped] = useState<any>(true)
  const [headers, setHeaders] = useState<any>(props.projectData)
  const findHeader = useCallback(
    (id :any) => {
      const header = headers.filter((c:any) => `${c.id}` === id)[0]
      return {
        header,
        index: headers.indexOf(header)
      }
    },
    [headers]
  )
  const moveHeader = useCallback(
    (id:any, atIndex:any) => {
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
  const [, drop] = useDrop(() => ({ accept: Components.HEADER }))
  useEffect(() => {
    if (dropped) {
      setArrangementOrder(headers)
      return
    }
    setArrangementOrder(false || headers)
  }, [headers, dropped, setArrangementOrder])

  function calcGrid (cols : any[]) {
    if (!cols) return '150px 1fr 100px'
    let grid = '150px'
    for (let i = 0; i < cols.length; i++) {
      grid += ' 1fr '
    }
    grid += '100px'

    return grid
  }

  function stretchHeader (headers : any[]) {
    if (headers.length >= 0) return
    return 'col-end'
  }

  return (
    <div
      ref={drop}
      className="grid gap-1 content-width"
      style={{
        gridTemplateColumns: calcGrid(headers)
      }}
    >
      <div className="col-span-1 col-start-1 row-start-1 col-start"></div>
      {headers &&
        headers?.map((header : any, i : any) => (
          <TableHeader
            class={`capitalize col-start-${i + 2} row-start-1 ${stretchHeader(
              headers
            )} text-center flex justify-center items-center`}
            key={header.id }
            id={`${header.id}`}
            text={header.text}
            moveHeader={moveHeader}
            findHeader={findHeader}
          />
        ))}

      {props.children}
    </div>
  )
})


