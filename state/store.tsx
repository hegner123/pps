import { Provider, createStore, atom } from 'jotai'
import PropTypes from 'prop-types'

const ppsStore = createStore()
export const songDetailsStore = atom<any>([])
export const songDetailsEditStore = atom<any>(false)
export const projectHasSongs = atom<any>(false)
export const currentArrangement = atom<any>([])
export const projectId = atom<any>(null)
export const debug = atom<any>(false)
export const gridEditEnabled = atom<any>(false)
export const showAlert = atom({ show: false, message: '' })
export const newSongEdit = atom<any>(false)
export const newSongObject = atom({
  name: '',
  songs: []
})
export const newInstrumentEdit = atom(false)
export const newInstrumentObject = atom({ name: '' })
export const debugDrag = atom(false)
export const requireUpdate = atom<Boolean>(false)

export const ppsStates = {
  songDetailsStore,
  songDetailsEditStore,
  projectHasSongs,
  currentArrangement,
  projectId,
  debug,
  debugDrag,
  gridEditEnabled,
  showAlert,
  newSongEdit,
  newSongObject,
  newInstrumentEdit,
  newInstrumentObject,
  requireUpdate
}

const JotaiProvider = ({ children }:any) => {
  return <Provider store={ppsStore}>{children}</Provider>
}



export default JotaiProvider
