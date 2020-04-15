import {combineReducers} from "redux";
import libraryReducer from "./libraryReducer";
import selectionReducer from "./selectionReducer";

export default combineReducers({
    libraries: () => libraryReducer,
    selectedLibraryId: selectionReducer
});

//console.log(store.getState());
// { libraries: [ id: 0, ..., ... ] } from libraryReducer which will then call JSON