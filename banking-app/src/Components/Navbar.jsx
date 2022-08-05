import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <h1 className='title'>BANK OF THE PHILIPPINES</h1>

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
