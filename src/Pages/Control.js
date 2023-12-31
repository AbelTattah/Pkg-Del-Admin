import React from 'react'
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import "../Styling/form.css"
import Mapper from '../Components/Mapper';
import { Admin } from '../Admin/Admin';
import { useEffect } from 'react';
import { useRef } from 'react';


function Control() {

  const admin = new Admin();
  var temp0 = useRef([{
    "FirstName": "No user info available",
		"LastName": "",
		"UserName": "",
		"Email": "",
		"Location": [
		]
  }]);
  var temp1 = useRef([{
    "FirstName": "No user info available",
		"LastName": "",
		"UserName": "",
		"Email": "",
		"Location": [
		]
  }]);



  useEffect(()=>{
     admin.viewAllUsers();
     setTimeout(()=>{
         temp0 = admin.riders;
         temp1 = admin.customers;  
     },3000);
  },[])

  return (
    <div className='Mainn'>
    <div className='topSection'> 
      <div className='title'>
        <div className='title0'><text>Payload</text></div>
        <div className='title1'><text>Admin Control</text></div>
      </div>
    </div>
    <div className='control'>
    <Mapper data={temp0.current} style={{}} style0={{}} /> <Mapper style={{}} style0={{}} data={temp1.current}/>
    </div>
         <div id="navbar">
          <BottomNavbar />
        </div>
    <div className='bottom'>
       <text>PKGDEL @2023</text>
    </div>
</div>
  )
}

export default Control