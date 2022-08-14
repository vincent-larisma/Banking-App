import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Clock from './Clock'

export default function SideBar({ handleClickPage }) {
  const navigate = useNavigate()
  const handleClickLogout = () => {
    localStorage.setItem('currentIndex', JSON.stringify(0))
    navigate('/Login')
  }
  const [sideBarState, setSidebarState] = useState('Home')

  const handleClickState = (value) => {
    if (value === 'Home') {
      setSidebarState('Home')
      handleClickPage(value)
    } else if (value === 'Withdraw') {
      setSidebarState('Withdraw')
      handleClickPage(value)
    } else if (value === 'Deposit') {
      setSidebarState('Deposit')
      handleClickPage(value)
    } else if (value === 'Transfer') {
      setSidebarState('Transfer')
      handleClickPage(value)
    } else if (value === 'History') {
      setSidebarState('History')
      handleClickPage(value)
    }
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
                <a
                  className={sideBarState === 'Home' ? 'has-text-white is-active' : 'has-text-white'}
                  onClick={() => handleClickState('Home')}>
                  <i class='fas fa-home '></i> Home
                </a>
              </li>
            </ul>
            <p className='menu-label pl-2 has-text-white pt-4'>Transactions</p>
            <ul className='menu-list pl-3 '>
              <li>
                <a
                  className={sideBarState === 'Withdraw' ? 'has-text-white is-active' : 'has-text-white'}
                  onClick={() => handleClickState('Withdraw')}>
                  <h1>
                    <i class='fa-solid fa-money-bills'></i> Withdraw
                  </h1>
                </a>
              </li>
              <li>
                <a
                  className={sideBarState === 'Deposit' ? 'has-text-white is-active' : 'has-text-white'}
                  onClick={() => handleClickState('Deposit')}>
                  <h1>
                    <i class='fa-solid fa-piggy-bank'></i> Deposit
                  </h1>
                </a>
              </li>
              <li>
                <a
                  className={sideBarState === 'Transfer' ? 'has-text-white is-active' : 'has-text-white'}
                  onClick={() => handleClickState('Transfer')}>
                  <h1>
                    <i class='fa-solid fa-money-bill-transfer'></i> Transfer
                  </h1>
                </a>
              </li>
              <li>
                <a
                  className={sideBarState === 'History' ? 'has-text-white is-active' : 'has-text-white'}
                  onClick={() => handleClickState('History')}>
                  <h1>
                    <i class='fa-solid fa-receipt'></i> History
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
