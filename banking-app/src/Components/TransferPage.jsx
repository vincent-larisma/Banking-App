import React, { useState } from 'react'

export default function TransferPage({ index }) {
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))
  let user = userListLocalStorage[index]
  const [transferState, setTransferState] = useState({ transferID: '', transferValue: '' })
  const time = new Date()
  const { transferID, transferValue } = transferState

  const handleChangeTransferID = (e) => {
    const { name, value } = e.target
    setTransferState({ ...transferState, [name]: parseInt(value) })
  }

  const handleChangeTransferValue = (e) => {
    const { name, value } = e.target
    setTransferState({ ...transferState, [name]: parseInt(value) })
  }

  const handleClickTransfer = () => {
    if (parseInt(transferValue) > parseInt(user.Balance)) {
      alert('Transfer Failed')
    } else if (transferID == '' || transferValue == '') {
      alert('Please input a transfer ID or Amount')
    } else {
      for (let i = 0; i < userListLocalStorage.length; i++) {
        if (userListLocalStorage[i].ID === transferID) {
          if (
            window.confirm(`Are you sure you to transfer $${transferValue} to ${userListLocalStorage[i].FullName}?`)
          ) {
            user.Balance = parseInt(user.Balance) - parseInt(transferValue)
            user.History.push({
              type: `Transfer (to ${userListLocalStorage[i].FullName})`,
              date: time.toLocaleDateString(),
              amount: transferValue,
            })
            userListLocalStorage[i].Balance = parseInt(userListLocalStorage[i].Balance) + parseInt(transferValue)
            localStorage.setItem('userListKey', JSON.stringify(userListLocalStorage))
          }
        }
      }
    }
    setTransferState({ ...transferState, transferID: '', transferValue: '' })
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
                  <i class='fa-solid fa-money-bill-transfer'></i> Transfer
                </h1>
              </div>
              <div className='column notification is-link is-full'>
                <h1 className='subtitle'>Total Amount in Bank: </h1>
                <div className='container notification is-link is-light'>
                  <h1 className='title has-text-centered'>$ {formatToCurrency(parseInt(user.Balance))}</h1>
                </div>
              </div>

              <div className='column notification is-link is-half is-offset-one-quarter'>
                <div className='column'>
                  <h1 className='subtitle'>Reciever's ID:</h1>
                  <input
                    className='input is-link  is-large'
                    type='number'
                    placeholder='Input ID'
                    name='transferID'
                    value={transferID}
                    onChange={handleChangeTransferID}
                  />
                </div>
                <div className='column'>
                  <h1 className='subtitle'>Amount Transferable: </h1>
                  <input
                    className='input is-link  is-large mb-2'
                    type='number'
                    placeholder='$ Amount'
                    name='transferValue'
                    value={transferValue}
                    onChange={handleChangeTransferValue}
                  />

                  <button className='button is-success has-text-centered' onClick={handleClickTransfer}>
                    Confirmed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
