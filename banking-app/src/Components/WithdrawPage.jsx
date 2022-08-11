import React from 'react'

export default function WithdrawPage() {
  return (
    <>
      <div className='sidebar-margin '>
        <section className='section notifiication'>
          <div class='columns is-multiline '>
            <div class='column notification is-link is-full '>
              <h1 className='title'>
                <i class='fa-solid fa-money-bills'></i> Withdraw
              </h1>
            </div>
            <div className='column notification is-link '>
              <h1 className='subtitle'>Amount Withdrawn: </h1>
              <div className='container'>
                <input class='input is-link  is-large mb-2' type='number' placeholder='$ Amount' />
                <button class='button is-success has-text-centered'>Confirmed</button>
              </div>
            </div>
            <div className='column is-0 '></div>
            <div className='column notification is-link'>
              <h1 className='subtitle'>Total Amount in Bank: </h1>
              <div className='container notification is-link is-light'>
                <h1 className='title has-text-centered'>Add Number Here</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
