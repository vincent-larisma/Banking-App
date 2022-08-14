import React, { useState } from 'react'

export default function ({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  let user = userListLocalStorage[index]
  const time = new Date()
  const [depositState, setDepositState] = useState({ depositValue: '' })
  const { depositValue } = depositState

  const handleChangeDeposit = (e) => {
    const { name, value } = e.target
    setDepositState({ [name]: parseInt(value) })
  }

  const handleClickDeposit = () => {
    if (parseInt(depositValue) < 0) {
      alert('Cannot deposit a negative amount')
    } else {
      user.Balance = parseInt(user.Balance) + parseInt(depositValue)
      user.History.push({ type: 'Deposit', date: time.toLocaleDateString(), amount: depositValue })
      localStorage.setItem('userListKey', JSON.stringify(userListLocalStorage))
    }
    setDepositState({ depositValue: '' })
  }

  //currency format
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  return (
    <>
      <div className='sidebar-margin '>
        <section className='section notifiication'>
          <div className='container '>
            <div class='columns is-multiline '>
              <div class='column notification is-link is-full '>
                <h1 className='title'>
                  <i class='fa-solid fa-piggy-bank'></i> Deposit
                </h1>
              </div>
              <div className='column notification is-link '>
                <h1 className='subtitle'>Amount Deposit: </h1>
                <div className='container'>
                  <input
                    class='input is-link  is-large mb-2'
                    type='number'
                    placeholder='$ Amount'
                    name='depositValue'
                    value={depositValue}
                    onChange={handleChangeDeposit}
                  />
                  <button class='button is-success has-text-centered' onClick={handleClickDeposit}>
                    Confirmed
                  </button>
                </div>
              </div>
              <div className='column is-0 '></div>
              <div className='column notification is-link'>
                <h1 className='subtitle'>Total Amount in Bank: </h1>
                <div className='container notification is-link is-light'>
                  <h1 className='title has-text-centered'>$ {formatToCurrency(parseInt(user.Balance))}</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
