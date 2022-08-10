import React from 'react'
import SideBar from './SideBar'

export default function UserPage() {
  return (
    <>
      <SideBar />
      <div className='sidebar-margin'>
        {/* <div class='columns'>
        <div class='column'>Hellosaidiyashduashuidhauihduiahuidshau</div>
        <div class='column'>Second column</div>
        <div class='column'>Third column</div>
        <div class='column'>Fourth column</div>
      </div> */}
        <div class='columns is-mobile'>
          <div class='column'>First column</div>
          <div class='column'>Second column</div>
          <div class='column'>Third column</div>
          <div class='column'>Fourth column</div>
        </div>
      </div>
    </>
  )
}
