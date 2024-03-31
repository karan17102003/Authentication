import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <NavLink to='/' >Login</NavLink>
        <NavLink to="/register">Register</NavLink>
    </div>
  )
}

export default Navbar