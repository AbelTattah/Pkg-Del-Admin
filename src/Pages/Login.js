import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import comScience_logo from "../Images/comScience_logo.png"
import "../Styling/login.css"
import Dashboard from './Dashboard';
import { Admin } from '../Admin/Admin';

function Login(props) {

  

  
  var [email,setEmail] = useState("");
  var [password,setPassword] = useState("");
  var [authstate,SetAuth] = useState("N/A");
  var [Redirect,setRedirect] = useState(false);
 
  const admin = new Admin();

  const Loguin = () => {
    
        if (email!="" && password!="") {
         admin.setPassndEmail(email,password);
         console.log(admin.password);
         console.log(admin.isloggedIn);
         admin.login();
         setTimeout(()=>setRedirect(admin.isloggedIn),3000);
        }
        else {
         SetAuth("False")
        }
      
  }

  return (
    <div className='Main'>
       {(Redirect)?(

          <Dashboard />
       ):(
          <div className='Main0'>  
          <div className='Form'>
               <h1>Admin</h1>
               <text id='text00'> Email: </text>
               <input id='input'  onChange={(event)=>setEmail(event.target.value)} />
               <text id='text00'> Password: </text>
               <input id='input'  onChange={(text)=>{setPassword(text.target.value)}} />
               <button id='Login' onClick={()=>Loguin()}>Login</button>
               {
                (authstate=="False")?(

                                      <div>
                                           Incorrect or empty Username or Password!
                                      </div>

                                     ):(
                                      <text>pkgd v1.0</text>
                                     )
               }
          </div>
          </div>

       )}
    </div>
  )
}

export default Login