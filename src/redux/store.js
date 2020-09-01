import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "../localStorage";

// Create the redux store based on reducers and 
// initial states from './reducers'. It also loads
// the localStorage data and insert it into the
// store.
const store = createStore(rootReducer, loadState());

// Subscribe changes into the store and save
// the state in the localStorage database
store.subscribe(() => {
  saveState({
    exercises: store.getState().exercises,
  });
});

export default store;
