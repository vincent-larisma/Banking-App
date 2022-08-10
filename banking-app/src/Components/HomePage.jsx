import React, { useState } from 'react'

export default function HomePage() {
  

  return (
    <>
      
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
                  <h1 className='subtitle'>
                    <i class='fa-solid fa-address-card'></i> Name
                  </h1>
                  <h1 className='title pl-3'>Name Here</h1>
                  <h1 className='subtitle'>
                    <i class='fa-solid fa-id-card-clip'></i> ID
                  </h1>
                  <h1 className='title pl-3'>ID here</h1>
                </div>
                <div class='column is-0'></div>

                <div class='column notification is-link'>
                  <h1 className='subtitle'>
                    <i class='fa-solid fa-credit-card'></i> Membership:
                  </h1>
                  <h1 className='title has-text-centered'>Bronze Member</h1>
                </div>
              </div>
              <div class='column notification is-link '>
                <h1 className='subtitle'>
                  <i class='fa-solid fa-wallet'></i> Total Cash Amount:
                </h1>
                <h1 className='title has-text-centered'>Add Number Here</h1>
              </div>
            </div>
          </section>
        </div>
      
    </>
  )
}
