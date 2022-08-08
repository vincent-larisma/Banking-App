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
            <span class='icon-text'>
              <span class='icon'>
                <i class='fa-solid fa-earth-europe'></i>
              </span>
              <span>BANK</span>
            </span>
          </div>
        </div>

        {method == 'logout' && (
          <div class='navbar-end flex-container-logout pt-1 pr-6 is-size-5'>
            <div class='navbar-item'>
              <div className='container'>
                <span class='icon-text'>
                  <span class='icon'>
                    <i class='fa-solid fa-right-from-bracket' onClick={handleClickLogout}></i>
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
