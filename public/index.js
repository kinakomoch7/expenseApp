// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoqEmnSVpN-EbQSUlNn3NB9gadVLitq3U",
  authDomain: "expenseapp-d6cb0.firebaseapp.com",
  projectId: "expenseapp-d6cb0",
  storageBucket: "expenseapp-d6cb0.appspot.com",
  messagingSenderId: "825294800053",
  appId: "1:825294800053:web:db70d5566a30cc6365aafc",
  measurementId: "G-2W7P9WVN26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      return true;
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  signInFlow: 'popup',
  signInSuccessUrl: 'subpages/main.html',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', uiConfig);



const auth = firebase.auth();

auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
