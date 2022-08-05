import React from 'react'
import { Routes, Route } from 'react-router-dom'

//Component
import LoginPage from './Components/LoginPage'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard />}></Route>
        <Route path='/Login' element={<LoginPage />}></Route>
        <Route path='/' element={<LoginPage />}></Route>
      </Routes>
    </>
  )
}

export default App
