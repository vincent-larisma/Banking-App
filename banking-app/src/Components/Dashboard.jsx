import React from 'react'

//Component
import Navbar from './Navbar'
import Footer from './Footer'
import UserDisplay from './UserDisplay'

export default function Dashboard() {
  return (
    <>
      <Navbar method='logout' />
      <UserDisplay />
      <Footer />
    </>
  )
}
