import React from 'react'
import data from "../Data/Simulated";
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import "../Styling/help.css"

function HelpandSupport() {
  return (
  <div className="Main">
  <div className="topSection">
    <div className="title">
      <div className="title0"><text>Payload</text></div>
      <div className="title1"><text>Help and Support</text></div>
    </div>
  </div>

  <div id="navbar">
          <BottomNavbar />
        </div>
  <div className="bottom">
    <text>University of Ghana @2023</text>
  </div>
</div>

  );
}

export default HelpandSupport