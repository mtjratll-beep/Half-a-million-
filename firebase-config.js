// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNgBpEMZ1WGQ9zkbJQDb9y6OJweFqWNpg",
  authDomain: "half-27475.firebaseapp.com",
  databaseURL: "https://half-27475-default-rtdb.firebaseio.com",
  projectId: "half-27475",
  storageBucket: "half-27475.firebasestorage.app",
  messagingSenderId: "270803082259",
  appId: "1:270803082259:web:eaa8ca526791b2280fb3e6",
  measurementId: "G-B31TSL4WN9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
