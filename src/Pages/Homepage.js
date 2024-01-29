import React from 'react'
import BottomNavbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import '../Styling/generalStyles.css'
import '../Styling/homepage.css'

function Homepage ({ id }) {
  return (
    <div className='hMain'>
      <div className='topSection'>
        <div className='title'>
          <div className='title0'>
            <text>Payload</text>
          </div>
          <div className='title1'>
            <text>Home</text>
          </div>
        </div>
        <button className='loginButton'>
          <Link id='link0' to='Dashboard'>
            Sign in
          </Link>
        </button>
      </div>
      <div className='middleSectionh'>
        <div className='middleSectionh0'>
          <div className='m0texth'>
            <text>
              <h2>Welcome,</h2>
            </text>
            <br />
            <text>
              <strong>This is a Package delivery System</strong>
            </text>
            <br />
            <p />
            <text />
            <ul>
              <li>Send Packages to others at affordable fees</li>
              <li>Track Packages in real-time</li>
              <li>Communicate with delivery persons</li>
            </ul>
            Use the bottom Navbar to navigate the site.
            <br />
            <p id='dcs'>Brought to you by Tattah Systems</p>
          </div>
        </div>
        <div className='middleSection1h'>
          <div className='m1texth'>
            Responses to Package delivery requests made are usually made <br />
            within minutes.
            <p />
            <p>
              Use the Help and Support Page If you encounter <br />
              any Issues
            </p>
            <p>
              This website constains:
              <ul>
                <li> Dashboard</li>
                <li> Package Delivery Map</li>
                <li> Messaging</li>
                <li> Help and Support Page</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <p style={{ color: 'white' }}>University of Ghana@2023</p>
    </div>
  )
}

export default Homepage
