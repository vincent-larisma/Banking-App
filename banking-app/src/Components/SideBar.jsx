import React from 'react'

export default function SideBar() {
  return (
    <>
      <div className='side-bar-container has-background-link  '>
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
          <div className='container subtitle text-center has-text-white'>User</div>
          <p className='menu-label pl-2 has-text-white '>Transactions</p>
          <ul className='menu-list pl-3 '>
            <li>
              <a className='has-text-white '>
                <i class='fas fa-home '></i> Withdraw
              </a>
            </li>
            <li>
              <a className='has-text-white'>
                <i class='fas fa-home'></i> Desposit
              </a>
            </li>
            <li>
              <a className='has-text-white'>
                <i class='fas fa-home'></i> Transfer
              </a>
            </li>
          </ul>

          <p className='menu-label pl-2 has-text-white'>Logout</p>
          <ul className='menu-list pl-3'>
            <li>
              <a className='has-text-white'>
                <i class='fas fa-home'></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}
