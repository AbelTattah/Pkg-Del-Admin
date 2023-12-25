import React from 'react'
import './styling/Footer.css'

function Footer() {
  return (
  <div class="ibottomSection">
        <div class="ibottomSectionmain">
            <div class="ibs1">
             <p>Links</p>
             <ul>
                <li>Grade Report </li>
                <li>Dashboard</li>
                <li>Instructor Contact</li>
             </ul>
            </div>
            <div class="ibs2">
                <p>Help and Support</p>
                
            </div>
            <p>
              Always make sure to contact your instructor if you<br></br>
              are not sure about your grade. 
            </p>
          
        </div>
        <p style={{textAlign:"center"}} id="text00">
            University of Ghana @2023
        </p>
       </div>
  )
}

export default Footer