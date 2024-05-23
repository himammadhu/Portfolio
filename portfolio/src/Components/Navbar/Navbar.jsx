import React from 'react'
import './navbar.scss';

const Navbar = () => {
  return (
    
      <div className="navbar">
        <a href="/" className="left">
          <p>H.M</p>
        </a>
        <div className="right">
          <a href='About'>About </a>
          <a href='Skills'>Skills </a>
          <a href='Project'>Project </a>
          <a href='Certificates'>Certificates </a>
          <a href='Contact'>Contact </a>

        </div>
      </div>
  )
}

export default Navbar
