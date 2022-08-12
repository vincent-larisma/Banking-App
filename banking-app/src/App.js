import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Component
import LoginPage from './Components/LoginPage'
import Dashboard from './Components/Dashboard'
import UserPage from './Components/UserPage'
import Register from './Components/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/User' element={<UserPage />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>
        <Route path='/' element={<LoginPage />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
