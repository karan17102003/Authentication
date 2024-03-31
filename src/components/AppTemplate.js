import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import './AppTemplate.css'

const AppTemplate = () => {
  return (
    <div id='app_template_container'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default AppTemplate