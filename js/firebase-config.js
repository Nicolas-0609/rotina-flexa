import { initializeApp} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBSpKeE22w0Eel0NRal4hjph2AsaFa3yLM",
    authDomain: "rotina--flexa.firebaseapp.com",
    databaseURL: "https://rotina--flexa-default-rtdb.firebaseio.com",
    projectId: "rotina--flexa",
    storageBucket: "rotina--flexa.firebasestorage.app",
    messagingSenderId: "599006200724",
    appId: "1:599006200724:web:c5c8e22ab6edc2354f0581",
    measurementId: "G-9Y4Y3WS88L"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);