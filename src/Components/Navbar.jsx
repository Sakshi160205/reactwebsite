import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/header">Header</a></li>
        
        <li><a href="/form">Form</a></li>
        <li><a href="/input">Input</a></li>
        <li><a href="/about">About</a></li>
        
      </ul>

    </nav>
     <img src='https://th.bing.com/th/id/OIP.6hrDwgTWiZGnX13nmux1xgHaE8?rs=1&pid=ImgDetMain' style={{width:'100%',height:'500px',position:'fixed'}}/>
    </>
    )
} 

export default Navbar;