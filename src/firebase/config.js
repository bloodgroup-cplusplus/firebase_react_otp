import {initializeApp} from 'firebase/app'
import {getFirestore,serverTimestamp,collection,addDoc,setDoc,updateDoc,doc,onSnapshot,query,where,getDocs,getDoc} from "firebase/firestore"
import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,updateProfile,signInWithCredential,sendPasswordResetEmail} from "firebase/auth"
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyD6vMxRpK_HKU-WWN2gC5rXrWlrVyb-dO4",
    authDomain: "otpproject-7714c.firebaseapp.com",
    projectId: "otpproject-7714c",
    storageBucket: "otpproject-7714c.appspot.com",
    messagingSenderId: "636748451600",
    appId: "1:636748451600:web:b15c864655d8c1646d1f95"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const projectFirestore = getFirestore(app)
  const projectAuth = getAuth(app)
  const projectStorage=getStorage(app)


  export {query,where,getDocs,getDoc,signInWithPopup,GoogleAuthProvider,doc,updateDoc,addDoc,setDoc,ref,uploadBytes, getDownloadURL,signInWithCredential,projectFirestore,projectStorage, projectAuth, serverTimestamp,onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword,collection,updateProfile,onSnapshot,sendPasswordResetEmail} 
