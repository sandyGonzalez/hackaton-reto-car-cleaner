import * as firebase from 'firebase/app';
import firebaseConfig from '../src/config'

const firebaseApp = firebase.initializeApp(firebaseConfig); 
export default firebaseApp;