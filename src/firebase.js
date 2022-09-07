// import firebase from 'firebase'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDMY5yo_atF7PTB4N4_8SbKVb2hvzpyx6o",
  authDomain: "amzonee-clone.firebaseapp.com",
  databaseURL: "https://amzonee-clone.firebaseio.com",
  projectId: "amzonee-clone",
  storageBucket: "amzonee-clone.appspot.com",
  messagingSenderId: "854775336808",
  appId: "1:854775336808:web:3393765014a44e41bb50dd",
  measurementId: "G-08R1YH3RRC"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {db , auth};