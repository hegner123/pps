import { Provider, createStore, atom } from 'jotai'
import PropTypes from 'prop-types'

const ppsStore = createStore()
export const songDetailsStore = atom([])
export const currentArrangement = atom([])
export const projectId = atom(null)
export const debug = atom(false)
export const gridEditEnabled = atom(false)
export const showAlert = atom({ show: false, message: '' })
export const newSongEdit = atom(false)
export const newSongObject = atom({
  name: '',
  songs: []
})
export const newInstrumentEdit = atom(false)
export const newInstrumentObject = atom({ name: '' })

export const ppsStates = {
  songDetailsStore,
  currentArrangement,
  projectId,
  debug,
  gridEditEnabled,
  showAlert,
  newSongEdit,
  newSongObject,
  newInstrumentEdit,
  newInstrumentObject
}

const JotaiProvider = ({ children }) => {
  return <Provider store={ppsStore}>{children}</Provider>
}

JotaiProvider.propTypes = {
  children: PropTypes.node
}

export default JotaiProvider
