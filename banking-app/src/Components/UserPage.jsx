import React from 'react'

export default function UserPage() {
  return (
    <>
      <div className='sideBar'>
        <aside className='menu'>
          <div className='navbar-brand'>
            <div className='navbar-item is-size-4'>
              <span class='icon-text'>
                <span class='icon'>
                  <i class='fa-solid fa-earth-europe'></i>
                </span>
                <span>BANK</span>
              </span>
            </div>
          </div>
          <div className='container subtitle'>User</div>
          <p className='menu-label'>Transactions</p>
          <ul className='menu-list'>
            <li>
              <a>
                <i class='fas fa-home'></i> Withdraw
              </a>
            </li>
            <li>
              <a>
                <i class='fas fa-home'></i> Desposit
              </a>
            </li>
            <li>
              <a>
                <i class='fas fa-home'></i> Transfer
              </a>
            </li>
          </ul>
          <p className='menu-label'>Logout</p>
          <ul className='menu-list'>
            <li>
              <a>
                <i class='fas fa-home'></i>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}
