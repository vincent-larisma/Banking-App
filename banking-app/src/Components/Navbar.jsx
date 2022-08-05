import React from 'react'

export default function Navbar() {
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
      </nav>
    </>
  )
}
