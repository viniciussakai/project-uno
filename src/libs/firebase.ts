import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyARcdAB0VdR6c09nMcTXChEPcS0pFiKgg0',
  authDomain: 'reuno-1d731.firebaseapp.com',
  projectId: 'reuno-1d731',
  storageBucket: 'reuno-1d731.appspot.com',
  messagingSenderId: '1066646089275',
  appId: '1:1066646089275:web:9aea585373c7d70e27361e'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

const auth = firebase.auth()

export { firebase, auth }
