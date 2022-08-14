import React, { useEffect } from 'react'

export default function HomePage({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))

  let user = userListLocalStorage[index]

  // currency format
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  useEffect(() => {
    if (!user.hasOwnProperty('History')) {
      user.History = []
      localStorage.setItem('userListKey', JSON.stringify(userListLocalStorage))
    }
  }, [])

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
                <h1 className='title pl-3'>{user.FullName}</h1>
                <h1 className='subtitle'>
                  <i class='fa-solid fa-id-card-clip'></i> ID
                </h1>
                <h1 className='title pl-3'>{user.ID}</h1>
              </div>
              <div class='column is-0'></div>

              <div className='column notification is-link'>
                <h1 className='subtitle'>
                  <i class='fa-solid fa-credit-card'></i> Membership:
                </h1>
                <h1 className='title has-text-centered'>
                  {user.Balance > 100000 && user.Balance < 1000000
                    ? 'Silver Member'
                    : user.Balance > 1000000 && user.Balance < 10000000
                    ? 'Gold Member'
                    : user.Balance > 10000000
                    ? 'Platinum Member'
                    : 'Bronze Member'}
                </h1>
              </div>
            </div>
            <div class='column notification is-link '>
              <h1 className='subtitle'>
                <i class='fa-solid fa-wallet'></i> Total Cash Amount:
              </h1>
              <h1 className='title has-text-centered'>$ {formatToCurrency(parseInt(user.Balance))}</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
