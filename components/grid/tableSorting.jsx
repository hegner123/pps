import update from 'immutability-helper'
import { memo, useCallback, useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { TableHeader } from './tableHeader'
import { ItemTypes } from '../../itemTypes'
import { useAtom } from 'jotai'
import {
  currentArrangement,
  newSongObject,
  newSongEdit
} from '../../state/store'
import PropTypes from 'prop-types'

export const TableSorting = memo(function Container (props) {
  const [newSongEditEnabled, setNewSongEditEnabled] = useAtom(newSongEdit)
  const [, setNewSong] = useAtom(newSongObject)
  const [, setArrangementOrder] = useAtom(currentArrangement)
  const [dropped, setDropped] = useState(true)
  const [headers, setHeaders] = useState(props.projectData)
  const [newSongName, setNewSongName] = useState('')
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

  function handleInstNameChange (e) {
    setNewSongName(e.target.value)
    setNewSong((newSong) => ({
      ...newSong,
      name: e.target.value
    }))
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
        {!newSongEditEnabled && (
          <button
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded"
            onClick={() => setNewSongEditEnabled(true)}
          >
            +
          </button>
        )}
        {newSongEditEnabled && (
          <>
            <button
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-2 px-4 rounded"
              onClick={() => setNewSongEditEnabled(false)}
            >
              X
            </button>
            <input
              type="text"
              name="add-instrument"
              value={newSongName}
              onChange={(e) => handleInstNameChange(e)}
            />
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
