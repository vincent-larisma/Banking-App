import React from 'react'
import SideBar from './SideBar'

export default function UserPage() {
  return (
    <>
      <SideBar />
      <div className='sidebar-margin '>
        <section className='section notifiication'>
          <div className='container '>
            <div class='columns is-multiline '>
              <div class='column notification is-link is-full '>
                <h1 className='title'>
                  <i class='fas fa-home'></i> Home
                </h1>
              </div>
              <div class='column notification is-link '>
                <h1 className='subtitle'>Name</h1>
                <h1 className='title'>Name Here</h1>
                <h1 className='subtitle'>ID</h1>
                <h1 className='title'>ID here</h1>
              </div>
              <div class='column is-0'></div>

              <div class='column notification is-link'>
                <h1 className='subtitle'>Membership:</h1>
                <h1 className='title has-text-centered'>Bronze Member</h1>
              </div>
            </div>
            <div class='column notification is-link '>
              <h1 className='subtitle'>Total Cash Amount:</h1>
              <h1 className='title has-text-centered'>Add Number Here</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
