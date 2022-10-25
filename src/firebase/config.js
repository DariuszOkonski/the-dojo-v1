import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBSXg22aYejafqc0u2Lp7mpoW06FrUax-g',
  authDomain: 'the-dojo-v1.firebaseapp.com',
  projectId: 'the-dojo-v1',
  storageBucket: 'the-dojo-v1.appspot.com',
  messagingSenderId: '1081229495182',
  appId: '1:1081229495182:web:ce782a06a096757c8e72df',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
