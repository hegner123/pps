import { Provider, createStore, atom } from "jotai";
const ppsStore = createStore();

export const selectedSongInit = atom(0);

const JotaiProvider = ({ children }) => {
  return <Provider store={ppsStore}>{children}</Provider>;
};

export default JotaiProvider;
