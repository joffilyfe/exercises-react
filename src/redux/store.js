import { createStore } from "redux";
import rootReducer from "./reducers";

// Create the redux store based on reducers and
// initial states from './reducers'.
const store = createStore(rootReducer);

export default store;
