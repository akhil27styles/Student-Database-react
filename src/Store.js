import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' 
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase'
import {composeWithDevTools} from 'redux-devtools-extension';
import { createFirestoreInstance,firestoreReducer } from 'redux-firestore';
const fbConfig = {
  apiKey: "AIzaSyBOWDjJzGfGPph_awD1z6QQNBX9m7r-EZI",
  authDomain: "student-base-8c92c.firebaseapp.com",
  databaseURL: "https://student-base-8c92c.firebaseio.com",
  projectId: "student-base-8c92c",
  storageBucket: "student-base-8c92c.appspot.com",
  messagingSenderId: "376729139414",
  appId: "1:376729139414:web:98df0f2bfba9c6f2a5b177",
  measurementId: "G-9Q5EDSVBQS"
}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
 firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,composeWithDevTools());
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
export default store;