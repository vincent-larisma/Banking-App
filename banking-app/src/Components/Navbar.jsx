import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar({ method }) {
  const navigate = useNavigate()
  const handleClickLogout = () => {
    navigate('/Login')
  }
  return (
    <>
      <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <div className='navbar-item pl-6 is-size-4'>
            <span className='icon-text'>
              <span className='icon'>
                <i className='fa-solid fa-earth-europe'></i>
              </span>
              <span>BANK</span>
            </span>
          </div>
        </div>
        {method == 'logout' && (
          <div className='navbar-end flex-container-logout pt-1 pr-6 is-size-5'>
            <div className='navbar-item'>
              <div className='container'>
                <span className='icon-text'>
                  <span className='icon'>
                    <i className='fa-solid fa-right-from-bracket' onClick={handleClickLogout}></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
