import firebase from 'firebase/app'
import 'firebase/auth'

const useEmulator = () => process.env.USE_FIREBASE_EMULATOR

const initialize = () => {
  if (firebase.apps.length > 0) return

  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  })
}

export const setUpFirebase = () => {
  initialize()
}

let auth: firebase.auth.Auth
let firestore: firebase.firestore.Firestore
let storage: firebase.storage.Storage

export const useAuth = () => {
  auth = firebase.app().auth()
  if (useEmulator()) {
    auth.useEmulator('http://localhost:9099')
  }
  return auth
}

export const useFirestore = () => {
  if (!firestore) {
    firestore = firebase.app().firestore()
    if (useEmulator()) {
      firestore.settings({
        host: 'localhost:8080',
        ssl: false,
      })
    }
  }
  return firestore
}

export const useStorage = () => {
  if (!storage) {
    storage = firebase.app().storage()
  }
  return storage
}
