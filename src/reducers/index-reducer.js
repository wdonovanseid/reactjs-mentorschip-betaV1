import { combineReducers } from 'redux';
import currentPageReducer from './current-page-reducer';
import loggedUserReducer from './logged-user-info-reducer';

import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  loggedUser: loggedUserReducer,
  firestore: firestoreReducer
});

export default rootReducer;