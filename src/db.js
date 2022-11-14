import firebase from 'firebase/app' 

// Get a Firestore instance

const firebaseConfig = {
    apiKey: "AIzaSyCfbbFjvNuPGtMoiKntchKw7xUxVd-s74s",
    authDomain: "rpi-test-fire.firebaseapp.com",
    projectId: "rpi-test-fire",
    storageBucket: "rpi-test-fire.appspot.com",
    messagingSenderId: "707961286982",
    appId: "1:707961286982:web:cc731d95b22cd0ffc67547"
  };
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()
