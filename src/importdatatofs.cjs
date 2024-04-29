const { initializeApp } = require("firebase/app");
const { collection, addDoc, getFirestore } = require("firebase/firestore");
const data = require("./assets/db/data.json");

const firebaseConfig = {
  apiKey: "AIzaSyC9dNTVyv--IdNM3Fg4VdP-sDXYhvJxkTY",
  authDomain: "fem-devjobs.firebaseapp.com",
  projectId: "fem-devjobs",
  storageBucket: "fem-devjobs.appspot.com",
  messagingSenderId: "1011590841938",
  appId: "1:1011590841938:web:2b71eb4cd6b20bae53418b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addDataToFirestore() {
  for (const item of data) {
    await addData(item);
  }
}

addDataToFirestore().catch(console.error);

async function addData(data) {
  try {
    await addDoc(collection(db, "jobs"), data);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}
