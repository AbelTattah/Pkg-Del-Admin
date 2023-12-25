import React from 'react'
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import "../Styling/instructor.css"

function InstructorContact() {
  return (
    <div className="Mainn">
    <div className="topSection">
      <img className="logo" height="50px" width="35px" src={comScience_logo} />
      <div className="title">
        <div className="title0"><text>Missing Grade Report System</text></div>
        <div className="title1"><text>Help and Support</text></div>
      </div>
    </div>
    <div id="navbar">
            <BottomNavbar />
          </div>
          <div id="footer">
           <Footer />
          </div>
  </div>
  )
}

export default InstructorContact