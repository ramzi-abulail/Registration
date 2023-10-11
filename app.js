
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
  apiKey: "AIzaSyAwrPNw69zvkoU9pcCeyyPSyCyPAdGeeRQ",
  authDomain: "registration-9158a.firebaseapp.com",
  projectId: "registration-9158a",
  storageBucket: "registration-9158a.appspot.com",
  messagingSenderId: "941984522584",
  appId: "1:941984522584:web:047108933f3f04d924452d",
  measurementId: "G-0694RLH7Z7"
};   
 // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth();

    signUp.addEventListener('click' , (e) =>{
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var number = document.getElementById('phone').value;

        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert('user Created')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // alert('User already exist!!');
            });
            function validateName(name) {
          if (name.trim() === "") {
            document.getElementById("usernameError").textContent =
              "Please enter your username";
            return false;
          } else {
            document.getElementById("usernameError").textContent = "";
            return true;
          }
        }

        function validateEmail(email) {
          if (!/^\S+@\S+.\S+$/.test(email)) {
            document.getElementById("emailError").innerHTML =
              "Please enter a valid email address";
            return false;
          } else {
            document.getElementById("emailError").innerHTML = "";
            return true;
          }
        }

        function validatePassword(password) {
          if (
            !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[\W_]).{8,}/.test(
              password
            )
          ) {
            document.getElementById("passwordError").innerHTML =
              "Password must be at least 8 characters with 1 number, 1 uppercase, and 1 lowercase. sc";
            return false;
          } else {
            document.getElementById("passwordError").innerHTML = "";
            return true;
          }
        }

    
        function validatePhone(phone) {
          if (!/^07\d{8}$/.test(phone)) {
            document.getElementById("phoneError").innerHTML =
              "Phone number must start with 07 and be 10 digits long";
            return false;
          } else {
            document.getElementById("phoneError").innerHTML = "";
            return true;
          }
        }

        // Check all fields and only proceed if they are valid
        if (
          validateName(username) &&
          validateEmail(email) &&
          validatePassword(password) &&  
          validatePhone(number)
        );

    });