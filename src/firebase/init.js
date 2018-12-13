import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAjjlBTOfJ8TSCYrOtC1QQObcgX8-5x71c",
  authDomain: "udemy-ninja-smoothies-a8676.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-a8676.firebaseio.com",
  projectId: "udemy-ninja-smoothies-a8676",
  storageBucket: "udemy-ninja-smoothies-a8676.appspot.com",
  messagingSenderId: "760818643825"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()