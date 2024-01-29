import React from 'react'
import BottomNavbar from '../Components/Navbar'
import '../Styling/message.css'

function Messaging () {
  return (
    <div className='MessagesM'>
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

      <div className='MessagesMain'>
        <div className='messagesView'>
          <div className='listOfUsers' />
          <div className='Message'>
            <div className='previousMessages' />
            <div className='sendMessage'>
              <textarea />
            </div>
          </div>
        </div>
        <div className='messagesSearchbar'>
          <text>Search for user</text>
          <input type='text' />
        </div>
      </div>
    </div>
  )
}

export default Messaging
