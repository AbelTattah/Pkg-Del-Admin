import React from 'react'
import BottomNavbar from '../Components/Navbar'
import '../Styling/help.css'

function HelpandSupport () {
  return (
    <div className='Main'>
      <div className='topSection'>
        <div className='title'>
          <div className='title0'>
            <text>Payload</text>
          </div>
          <div className='title1'>
            <text>Help and Support</text>
          </div>
        </div>
        <div id='navbar'>
          <BottomNavbar />
        </div>
      </div>

      <div className='bottom'>
        <text>PKGDEL @2023</text>
      </div>
    </div>
  )
}

export default HelpandSupport
