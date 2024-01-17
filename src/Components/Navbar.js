import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import './styling/Navbar.css'

function Navbar() {
  return (
    <div id='bnv'>
         <Link to="Dashboard" id="link" >Dashboard</Link>
         <Link to="Control" id="link" >Control</Link>
         <Link to="Help" id="link" >Help</Link>
         <Link to="Ins" id="link" >Messaging</Link> 
         <Link to="Login" id="link" >Logout</Link>
    </div>
  )
}

export default Navbar;