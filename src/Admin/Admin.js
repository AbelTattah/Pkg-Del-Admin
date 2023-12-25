import axios from "axios";
import { getAuth,signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";

/*
TODO:
Backedn
add a route for viewing the details of particular customer Admin
add a route for registering an admin
*/

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


class Admin {
    constructor(type ="Admin",isloggedIn = false,email,password) {
        this.type = type;
        this.email = email;
        this.password=password;
    }
    
    register(FirstName,LastName,Username) {
        dbresponse ="";
        //Verify username fist in Mongo DB collection by trying to create a document
        axios.post('',{FirstName:FirstName,LastName:LastName,UserName:Username,Email:this.email})
        .catch((error)=>{
            console.log(error.message)
            dbresponse = error.message;
        })
        
        if(dbresponse!="") { 
        createUserWithEmailAndPassword(auth, this.email,this.password)
        .then(() => {
          // Signed up 
           console.log("User Successfully signed up");
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
       });
    }
    }

    login(username) {
        //verify user
        signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
  
        //fetch all user information
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
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