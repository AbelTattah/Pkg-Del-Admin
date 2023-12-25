import axios from "axios";
import { getAuth,signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2zccHkFhUb16CPQW_yauasQlyKkxjmP0",
  authDomain: "pkgdel-b7b61.firebaseapp.com",
  projectId: "pkgdel-b7b61",
  storageBucket: "pkgdel-b7b61.appspot.com",
  messagingSenderId: "999639158885",
  appId: "1:999639158885:web:20ec12e5bebe532f53f68c",
  measurementId: "G-FK14MHVT34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();

class Admin {
    constructor() {
        this.type = "Admin";
        this.email = "";
        this.password="";
        this.dbresponse ="";
        this.isloggedIn = false;
        this.isRegistered = false;
    }

    setPassndEmail(email,password) {
       this.email = email;
       this.password = password;
    }

    
    register(FirstName,LastName,Username) {
     
        //Verify username fist in Mongo DB collection by trying to create a document
        axios.post('http://localhost:4000/admin/adminregister',{FirstName:FirstName,LastName:LastName,UserName:Username,Email:this.email})
        .catch((error)=>{
            console.log(error.message)
            this.dbresponse = error.message;
        })
        
        if(this.dbresponse!="") { 
        createUserWithEmailAndPassword(auth, this.email,this.password)
        .then(() => {
          // Signed up 
           console.log("Admin Successfully signed up");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
       });
    }
    }

    login() {
        //verify user
        signInWithEmailAndPassword(auth,this.email,this.password)
       .then(() => {
          this.isloggedIn=true;
        })
       .catch((error) => {
        console.log(error.message);
       });
    }
    
    viewAllUsers() {
       
    }
    seeAllMovingPackages() {
      //Get all the coordinates of all the riders 
    }
    #sendGeneralNotifications() {
      //Send messages to both user and riders
      //Make sure info previous message information is not lost
    }
    #removeUser() {
      //remove a particular customer
    }
}

export {Admin};