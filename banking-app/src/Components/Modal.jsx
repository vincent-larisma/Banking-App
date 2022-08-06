import React from 'react'
import { useState } from 'react'

export default function Modal(props) {
  const [deposit, setDeposit] = useState({
    depositValue: '',
  })

  const { depositValue } = deposit

  const handleChangeDeposit = (event) => {
    const { value, name } = event.target
    setDeposit({ ...deposit, [name]: value })
  }

  const handleSubmit = () => {
    if (props.method === 'deposit') {
      props.handleClickNewDeposit(parseInt(depositValue))
    }
    if (props.method === 'withdraw') {
      props.handleClickNewWithdraw(props.index)
    }
  }

  return (
    <>
      {props.isOpen && (
        <div id='modalcomponent' className='modal active-modal'>
          <div onClick={props.toggleModal} className='overlay'></div>
          <div className='modal-content'>
            {props.method === 'deposit' && (
              <input
                type='Amount:'
                id='amount-label'
                name='depositValue'
                value={depositValue}
                placeholder='Enter Amount'
                onChange={handleChangeDeposit}
              />
            )}
            {props.method === 'withdraw' && <input type='Amount:' id='amount-label' placeholder='Enter Amount' />}
            <button onClick={handleSubmit}>Submit</button>
            <button className='close-modal' onClick={props.toggleModal}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  )
}
