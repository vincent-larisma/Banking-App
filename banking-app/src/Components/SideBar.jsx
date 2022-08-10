import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
  const navigate = useNavigate()
  const handleClickLogout = () => {
    navigate('/Login')
  }
  return (
    <>
      <div className='side-bar-container has-background-black  '>
        <div className='flex-item'>
          <div className='navbar-brand '>
            <div className='navbar-item is-size-4 has-text-white'>
              <span class='icon-text'>
                <span class='icon'>
                  <i class='fa-solid fa-earth-europe'></i>
                </span>
                <span>BANK</span>
              </span>
            </div>
          </div>
          <aside className='menu '>
            <ul className='menu-list pl-3 pt-3  '>
              <li>
                <a className='has-text-white is-active'>
                  <i class='fas fa-home '></i> Home
                </a>
              </li>
            </ul>
            <p className='menu-label pl-2 has-text-white pt-4'>Transactions</p>
            <ul className='menu-list pl-3 '>
              <li>
                <a className='has-text-white '>
                  <h1>
                    <h1></h1> <i class='fas fa-home '></i> Withdraw
                  </h1>
                </a>
              </li>
              <li>
                <a className='has-text-white'>
                  <h1>
                    <i class='fas fa-home'></i> Desposit
                  </h1>
                </a>
              </li>
              <li>
                <a className='has-text-white'>
                  <h1>
                    <i class='fas fa-home'></i> Transfer
                  </h1>
                </a>
              </li>
              <li>
                <a className='has-text-white'>
                  <h1>
                    <i class='fas fa-home'></i> History
                  </h1>
                </a>
              </li>
            </ul>
          </aside>
        </div>
        <div className='flex-item mb-6'>
          <ul className='menu-list pl-3'>
            <li>
              <a className='has-text-white' onClick={handleClickLogout}>
                <h1>
                  <i class='fa-solid fa-right-from-bracket'></i> Logout
                </h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
