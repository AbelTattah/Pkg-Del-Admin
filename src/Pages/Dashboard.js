import React from 'react'
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import Mapper from '../Components/Mapper';
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import "../Styling/dashboard.css"
import "../Styling/generalStyles.css"



function Dashboard({name}) {

  return (
    <div className='dMain'>
      <div className='topSection'> 
          <div className='title'>
            <div className='title0'><text>Payload</text></div>
            <div className='title1'><text>Admin </text></div>
          </div>
      </div>
     
        <div id="navbar">
          <BottomNavbar />
        </div>
       
    </div>
  )
}

export default Dashboard