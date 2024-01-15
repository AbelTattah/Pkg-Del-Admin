import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import "../Styling/login.css"
import Dashboard from './Dashboard';
import { Admin } from '../Admin/Admin';

function Register(props) {

  

  
  var [firstName,setFirstName] = useState("");
  var [lastName,setLastName] = useState("");
  var [username,setUsername] = useState("");
  var [email,setEmail] = useState("");
  var [password,setPassword ] = useState("");
  var [authstate,SetAuth] = useState("N/A");
 
  const admin = new Admin()

  const Register = () => {
    
        if (firstName != "" && lastName != "" && username != "" && email != "" && password != "") {
            admin.setPassndEmail(email,password);
            admin.register(firstName,lastName,username);
        }
        else {
          SetAuth("False");
        }
      
  }

  return (
    <div className='Main'>
       {(admin.isRegistered=="True")?(

          <Dashboard/>
       ):(
          <div className='Main0'>  
          <div className='Form'>
               <h1>Admin Registration</h1>
               <text id='text00'> FirstName: </text>
               <input id='input'  onChange={(event)=>setFirstName(event.target.value)} />
               <text id='text00'> LastName: </text>
               <input id='input'  onChange={(event)=>setLastName(event.target.value)} />
               <text id='text00'> UserName: </text>
               <input id='input'  onChange={(event)=>setUsername(event.target.value)} />
               <text id='text00'> Email: </text>
               <input id='input' type='email'  onChange={(text)=>{setEmail(text.target.value)}} />
               <text id='text00'> Password: </text>
               <input id='input' type='password' onChange={(event)=>setPassword(event.target.value)} />
               <button id='Login' onClick={()=>Register()}>Register</button>
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

export default Register