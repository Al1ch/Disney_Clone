import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDipoLeWIMvkrfVXcw2OA4il8PEo65VMa0",
    authDomain: "disneyplus-clone-2d517.firebaseapp.com",
    projectId: "disneyplus-clone-2d517",
    storageBucket: "disneyplus-clone-2d517.appspot.com",
    messagingSenderId: "78584234916",
    appId: "1:78584234916:web:f3b9b77ee5a4b472ce7731",
    measurementId: "G-VGTZ9RFE10"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); //Database
  const auth = firebase.auth(); //Authentification
  const provider = new firebase.auth.GoogleAuthProvider();//Provider Pour te Log aveec Google compte
  
  export { auth, provider}; //permet aux autres fichier d'avoir acces
  export default db;


  //Firebase créer un nouveau projet et copier coller le firebaseConfig
  //écrire les const ci dessus