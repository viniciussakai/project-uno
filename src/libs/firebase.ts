import firebase from 'firebase/app'

import auth from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_AUTH,
  projectId: process.env.FIREBASE_ID,
  storageBucket: process.env.FIREBASE_STORAGE,
  messagingSenderId: process.env.FIREBASE_MESSAGE,
  appId: process.env.FIREBASE_APP
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { firebase, auth }
