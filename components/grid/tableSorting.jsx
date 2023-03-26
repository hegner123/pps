import update from 'immutability-helper'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { TableHeader } from './tableHeader'
import { ItemTypes } from '../../itemTypes'
import { useAtom } from 'jotai'
import { useArrangement } from '../../hooks/arrangement/useArrangement'
import {
  currentArrangement,
  newInstrumentObject,
  newInstrumentEdit
} from '../../state/store'
import PropTypes from 'prop-types'

export const TableSorting = memo(function Container (props) {
  const [newInstrumentEditEnabled, setNewInstrumentEditEnabled] =
    useAtom(newInstrumentEdit)
  const [, setNewInstrument] = useAtom(newInstrumentObject)
  const [, setArrangementOrder] = useAtom(currentArrangement)
  const [dropped, setDropped] = useState(true)
  const [headers, setHeaders] = useState(props.projectData)
  const [newInstrumentName, setNewInstrumentName] = useState('')
  const globalArrangement = useArrangement()
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

  function handleInstrumentNameChange (e) {
    setNewInstrumentName(e.target.value)
    setNewInstrument((newInstrument) => ({
      ...newInstrument,
      name: e.target.value
    }))
  }

  function handleInstrumentNameSubmit (e) {
    globalArrangement.addInstrument(newInstrumentName)
  }

  return (
    <div
      ref={drop}
      className="grid "
      style={{
        gridTemplateColumns:
          'repeat(auto-fill, min(fit-content,var(--grid-cell-size)))'
      }}
    >
      <div className="col-start-1 col-span-1 row-start-1"></div>
      {headers?.map((header, i) => (
        <TableHeader
          classes={`capitalize col-start-${
            i + 2
          } row-start-1 text-center flex justify-center `}
          key={header.id}
          id={`${header.id}`}
          text={header.text}
          moveHeader={moveHeader}
          findHeader={findHeader}
        />
      ))}
      <div
        className={'capitalize  row-start-1 text-center flex justify-center '}
        style={{ gridColumn: arrangementLength + 2, gridRowStart: '1' }}
      >
        {!newInstrumentEditEnabled && (
          <button
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded"
            onClick={() => setNewInstrumentEditEnabled(true)}
          >
            +
          </button>
        )}
        {newInstrumentEditEnabled && (
          <>
            <input
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded"
              type="text"
              name="add-instrument"
              value={newInstrumentName}
              onChange={(e) => handleInstrumentNameChange(e)}
            />
            <button
              className="bg-green-300 hover:bg-green-500 text-slate-800 font-bold py-2 px-4 rounded ml-1"
              onClick={() => handleInstrumentNameSubmit()}
            >
              ✓
            </button>
            <button
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded ml-1"
              onClick={() => setNewInstrumentEditEnabled(false)}
            >
              X
            </button>
          </>
        )}
      </div>
      {props.children}
    </div>
  )
})

TableSorting.propTypes = {
  props: PropTypes.string,
  children: PropTypes.any,
  projectData: PropTypes.array
}
