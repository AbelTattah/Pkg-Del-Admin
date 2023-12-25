import React from 'react'
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import "../Styling/form.css"


function MissingGradeForm() {
  return (
    <div className='Mainn'>
    <div className='topSection'>
          <img className='logo' height="50px" width="35px" src={comScience_logo}></img> 
      <div className='title'>
        <div className='title0'><text>Missing Grade Report System</text></div>
        <div className='title1'><text>Missing Grade Form</text></div>
      </div>
    </div>
         <div className='fform'>
          <form id='f'>
                 <label>Full Name:<br></br>
                     <input id='input0'></input>
                 </label><br></br>
                 <label>Course:<br></br>
                     <input id='input0'></input>
                 </label><br></br>
                 <label>Lecturer:<br></br>
                     <input id='input0'></input>
                 </label><br></br>
                 <label>Problem:<br></br>
                 <input name='issue' id='mi' type='radio'></input>
                  <label>Missing grade</label><br></br>
                 <input name='issue' id="mis" type='radio'></input>
                  <label>Incorrect grade</label>
                 </label>
                 <label>More info (Optional):<br></br>
                     <textarea id='textArea'></textarea>
                 </label><br></br>
                 <button id='submit'>Submit</button>
          </form>
         </div>
         <div id="navbar">
          <BottomNavbar />
        </div>
    <div className='bottom'>
       <text>University of Ghana @2023</text>
    </div>
</div>
  )
}

export default MissingGradeForm