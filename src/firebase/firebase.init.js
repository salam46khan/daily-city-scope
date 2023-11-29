// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //   apiKey: "AIzaSyCvsPuIBVMoctYGiCE5Kseo-Df0t73bLwg",
    //   authDomain: "daily-city-scope.firebaseapp.com",
    //   projectId: "daily-city-scope",
    //   storageBucket: "daily-city-scope.appspot.com",
    //   messagingSenderId: "1042057078509",
    //   appId: "1:1042057078509:web:3a372ebe71840ed2230ee4"

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth