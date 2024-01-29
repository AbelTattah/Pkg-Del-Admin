// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2zccHkFhUb16CPQW_yauasQlyKkxjmP0',
  authDomain: 'pkgdel-b7b61.firebaseapp.com',
  projectId: 'pkgdel-b7b61',
  storageBucket: 'pkgdel-b7b61.appspot.com',
  messagingSenderId: '999639158885',
  appId: '1:999639158885:web:20ec12e5bebe532f53f68c',
  measurementId: 'G-FK14MHVT34'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
