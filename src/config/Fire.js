import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCFQFTnwzPJ0i7br2C64UVIoCaMVLzKZEk",
  authDomain: "juliocarneir.firebaseapp.com",
  databaseURL: "https://juliocarneir.firebaseio.com",
  projectId: "juliocarneir",
  storageBucket: "juliocarneir.appspot.com",
  messagingSenderId: "558152189358"
}

const fire = firebase.initializeApp(config)
export default fire