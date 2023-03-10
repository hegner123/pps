import { Provider, createStore, atom } from 'jotai'
import PropTypes from 'prop-types'

const ppsStore = createStore()
export const songDetailsStore = atom([])
export const currentArrangement = atom([])
export const projectId = atom(null)
export const debug = atom(false)

const JotaiProvider = ({ children }) => {
  return <Provider store={ppsStore}>{children}</Provider>
}

JotaiProvider.propTypes = {
  children: PropTypes.node
}

export default JotaiProvider
