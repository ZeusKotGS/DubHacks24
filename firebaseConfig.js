import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClTjzfn_y1FcbJXXDOpz3bH_k3SJ01UuA",
  authDomain: "recipesharing-be4a6.firebaseapp.com",
  databaseURL: "https://recipesharing-be4a6-default-rtdb.firebaseio.com",
  projectId: "recipesharing-be4a6",
  storageBucket: "recipesharing-be4a6.appspot.com",
  messagingSenderId: "697341533051",
  appId: "1:697341533051:web:286df9119c02a4fc773bde",
  measurementId: "G-XMEQ7T60J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;