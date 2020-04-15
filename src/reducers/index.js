import {combineReducers} from "redux";
import libraryReducer from "./libraryReducer";

export default combineReducers({
    libraries: () => libraryReducer
});

//console.log(store.getState());
// { libraries: [ id: 0, ..., ... ] } from libraryReducer which will then call JSON