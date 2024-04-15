import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth,  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHVS7-hL3urlETcCHI3DjW8xLY-FUR4dc",
  authDomain: "hpe-codewar-hackathon-2024.firebaseapp.com",
  projectId: "hpe-codewar-hackathon-2024",
  storageBucket: "hpe-codewar-hackathon-2024.appspot.com",
  messagingSenderId: "13597319660",
  appId: "1:13597319660:web:e705a486a6bdae219760c9",
  measurementId: "G-NZHDXS133S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const signupEmailIn = document.getElementById("email");
const phonenumberIN = document.getElementById("phonenumber");
const gstnum = document.getElementById("gstin");
const aadharcard = document.getElementById("aadharcard");
const signupPasswordIn = document.getElementById("password");
const confirmSignUpPasswordIn = document.getElementById("confirm-password");
const createacctbtn = document.getElementById("signup");
const addressin = document.getElementById("addresso");



var email, signupPassword, confirmSignUpPassword , phonenumber, gstnumber,aadharcardnum, address;

createacctbtn.addEventListener("click", function() {
  var isVerified = true;
  address = addressin.value;
  aadharcardnum = aadharcard.value
  gstnumber = gstnum.value;
  phonenumber = phonenumberIN.value;
  email = signupEmailIn.value;
  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if(signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.")
      isVerified = false;
  }
  
  if(phonenumber == null || email == null || signupPassword == null || confirmSignUpPassword == null  || gstnumber == null || aadharcard == null || address == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }
  
  if(isVerified) {
    createUserWithEmailAndPassword(auth, email, signupPassword)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      window.alert("Success! Account created.");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      window.alert("Error occurred. Try again.");
    });
  }
});

