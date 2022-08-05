import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <div className='navbar-item'>Bank of the Philippines</div>

          <a role='button' className='navbar-burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
      </nav>
    </>
  )
}
