import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='HS'>
          <li>H.S</li>
        </ul>
        <ul className='list'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Experiance</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
