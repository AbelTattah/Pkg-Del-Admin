import React from 'react'
import comScience_logo from "../Images/comScience_logo.png"
import data from "../Data/Simulated";
import BottomNavbar from '../Components/BottomNavbar';
import Footer from '../Components/footer';
import "../Styling/help.css"

function HelpandSupport() {
  return (
  <div className="Main">
  <div className="topSection">
    <img className="logo" height="50px" width="35px" src={comScience_logo} />
    <div className="title">
      <div className="title0"><text>Missing Grade Report System</text></div>
      <div className="title1"><text>Help and Support</text></div>
    </div>
  </div>
  <div className='middles'>
  <p>
    <h2>Frequently asked questions</h2>
    <ul>
      <li>How long does it take for a grade to be changed?</li>
      <li>How do I check whether my grade has been changed?</li>
      <li>Can I request for a change of grades?</li>
      <li>I cannot find my Instructors contact</li>
    </ul>
  </p>
  <p>
    <h3>How to?</h3>
    <ul>
    <li>Make a report about my grades</li>
    <li>Contact an Instructor</li>
    <li>Navigate the website</li>
    </ul>
  </p>
   <h4>Send us a message:</h4>
    <textarea placeholder='type your message here'>

    </textarea><br>

    </br>
    <button type='submit'>Send</button>
    </div>
  <div id="navbar">
          <BottomNavbar />
        </div>
        <div id="footer">
         <Footer />
        </div>
  <div className="bottom">
    <text>University of Ghana @2023</text>
  </div>
</div>

  );
}

export default HelpandSupport