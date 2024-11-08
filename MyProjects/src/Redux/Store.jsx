import { createStore } from "redux";
import fetch_Reducer from "./Reducers";

const store = createStore(fetch_Reducer);

export default store;