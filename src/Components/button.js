import React from 'react'
import './styling/button.css'
/*
Simple Button with configurable background color, labelColor, width
and label size.
*/

function Button ({ bgcolor = 'black', labelColor = 'white', width, height = '30px', label = '90px', onClick = {} }) {
  return <button onClick={onClick} className='Button' style={{ backgroundColor: bgcolor, width, height }}><text style={{ color: labelColor, fontWeight: 600 }}>{label}</text></button>
}

export default Button
