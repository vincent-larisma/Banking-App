import React, { useState } from 'react'

export default function WithdrawPage({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  let user = userListLocalStorage[index]
  const time = new Date()
  const [withdrawState, setWithdrawState] = useState({ withdrawValue: '' })

  const { withdrawValue } = withdrawState

  const handleChangeDeposit = (e) => {
    const { name, value } = e.target
    setWithdrawState({ [name]: parseInt(value) })
  }

  const handleClickDeposit = () => {
    if (user.Balance <= 0) {
      alert('Withdraw cannot be more than your balance')
    } else if (parseInt(withdrawValue) < 0) {
      alert('Cannot withdraw a negative amount')
    } else {
      user.Balance = parseInt(user.Balance) - parseInt(withdrawValue)
      user.History.push({ type: 'Withdraw', date: time.toLocaleDateString(), amount: withdrawValue })
      localStorage.setItem('userListKey', JSON.stringify(userListLocalStorage))
      setWithdrawState({ withdrawValue: '' })
    }
  }
  //currency format
  function formatToCurrency(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }
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
                <input
                  class='input is-link  is-large mb-2'
                  type='number'
                  placeholder='$ Amount'
                  name='withdrawValue'
                  value={withdrawValue}
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
        </section>
      </div>
    </>
  )
}
