import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCNRK30rVg-jRFzNzOKKMsZkaifcOom1V0",
  authDomain: "proyectofinal-3fafc.firebaseapp.com",
  databaseURL: "https://proyectofinal-3fafc-default-rtdb.firebaseio.com",
  projectId: "proyectofinal-3fafc",
  storageBucket: "proyectofinal-3fafc.appspot.com",
  messagingSenderId: "774716180746",
  appId: "1:774716180746:web:e0b0866e6fb161b35012f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)
export default db