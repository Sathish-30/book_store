import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/index.js'

const LandingPageLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default LandingPageLayout