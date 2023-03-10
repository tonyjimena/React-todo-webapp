// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, child } from "firebase/database";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5fFLEMFFVwS4SEFq-Eir6Qs2lIZ882hc",
  authDomain: "todoapp-efa63.firebaseapp.com",
  databaseURL: "https://todoapp-efa63-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoapp-efa63",
  storageBucket: "todoapp-efa63.appspot.com",
  messagingSenderId: "938975668497",
  appId: "1:938975668497:web:21462882778831797044b0"
};

// Initialize Firebase
try {

  const app = initializeApp(firebaseConfig);

  const realtimeDB = getDatabase(app)

  const firestoreDB = getFirestore(app);


} catch (error) {
  console.error(error)
}


function getRealtimeDBData() {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `todos/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val()
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getFirestoreTodos() {
  const app = initializeApp(firebaseConfig);

  const firestoreDB = getFirestore(app);
  const querySnapshot = await getDocs(collection(firestoreDB, "todos"));

  return querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() }
  })
}

async function addFirestoreTodo(todo) {
  const app = initializeApp(firebaseConfig);
  const firestoreDB = getFirestore(app);

  return await addDoc(collection(firestoreDB, "todos"), {
    title: todo.title,
    complete: false
  });

}

async function deleteFirestoreTodo(id) {
  const app = initializeApp(firebaseConfig);
  const firestoreDB = getFirestore(app);

  return await deleteDoc(doc(firestoreDB, "todos", id));

}

async function editFirestoreTodo(id, todo) {
  const app = initializeApp(firebaseConfig);
  const firestoreDB = getFirestore(app);

  return await setDoc(doc(firestoreDB, "todos", id), todo);

}



export { getRealtimeDBData, getFirestoreTodos, addFirestoreTodo, deleteFirestoreTodo, editFirestoreTodo };
