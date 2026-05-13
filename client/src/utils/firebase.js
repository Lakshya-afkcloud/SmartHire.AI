
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "samrthireai.firebaseapp.com",
  projectId: "samrthireai",
  storageBucket: "samrthireai.firebasestorage.app",
  messagingSenderId: "664131995241",
  appId: "1:664131995241:web:6bdcb98d9537c5700c84f8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
});


export {auth , provider}