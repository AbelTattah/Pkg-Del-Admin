/*
This file contains the component and logic for logging a user in
*/

import React, { useState } from 'react'
import '../Styling/login.css'
import Dashboard from './Dashboard'
import { Admin } from '../Admin/Admin'

function Login (props) {
  // State for admin email
  const [email, setEmail] = useState('')
  // State for admin password
  const [password, setPassword] = useState('')
  // Authentication state
  const [authstate, SetAuth] = useState('N/A')
  // State for redirection
  const [Redirect, setRedirect] = useState(false)
  
  // Create an instance of Admin class
  const admin = new Admin()
  
  // Log the user in
  const LogUserIn = () => {
    //Check whether email and password fields are empty
    if (email != '' && password != '') {
      admin.setPassndEmail(email, password)
      console.log(admin.password)
      console.log(admin.isloggedIn)
      admin.login()
      setTimeout(() => setRedirect(admin.isloggedIn), 3000)
    } else {
      // If username email and password are incorrect, alert the user
      SetAuth('False')
    }
  }

  return (
    <div className='Main'>
      {Redirect
        ? (<>
          {/* Main Dashboard Component */}
          <Dashboard />
          </>
          )
        : (
          <div className='Main0'>
            <div className='Form'>
              <h1>Admin</h1>
              <text id='text00'> Email: </text>
              {/* User Inputs*/}
              <input
                id='input'
                onChange={(event) => setEmail(event.target.value)}
              />
              <text id='text00'> Password: </text>
              <input
                id='input'
                onChange={(text) => {
                  setPassword(text.target.value)
                }}
              />
              <button id='Login' onClick={() => LogUserIn()}>
                Login
              </button>
              {/* Login status information */}
              {authstate == 'False'
                ? (
                  <div>Incorrect or empty Username or Password!</div>
                  )
                : (
                  <text>pkgd v1.0</text>
                  )}
            </div>
          </div>
          )}
    </div>
  )
}

export default Login
