import { Provider, createStore, atom } from "jotai";

const ppsStore = createStore();
export const selectedSongInit = atom(0);
export const currentArrangement = atom([]);
export const projectId = atom(null);
export const debug = atom(false);




const JotaiProvider = ({ children }) => {
  
  return <Provider store={ppsStore}>{children}</Provider>;
};

export default JotaiProvider;
