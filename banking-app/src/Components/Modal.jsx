import React from 'react'
import { useState } from 'react'

export default function Modal(props) {

const [deposit, setDeposit] = useState({
  depositValue: ''
})

const [withdraw, setWithdraw] = useState({
  withdrawValue: ''
})

const [transfer, setTransfer] = useState({
  transferValue: ''
})

const [transferId, setTransferId] = useState({
  transferNewId: ''
})

const { depositValue } = deposit;
const { withdrawValue } = withdraw;
const { transferValue } = transfer;
const { transferNewId } = transferId;

const handleChangeDeposit = (event) => {
  const { value, name } = event.target
  setDeposit({ ...deposit, [name]: value })
}

const handleChangeWithdraw = (event) => {
  const { value, name } = event.target
  setWithdraw({ ...withdraw, [name]: value })
}

const handleChangeTransfer = (event) => {
  const { value, name } = event.target
  setTransfer({ ...transfer, [name]: value })
}

const handleTransferId = (event) => {
  const { value, name } = event.target
  setTransferId({ ...transferId, [name]: value})
}

const handleSubmit = () =>{
if (props.method ==='deposit'){
  props.handleClickNewDeposit(parseInt(depositValue))
}
if (props.method==='withdraw'){
  props.handleClickNewWithdraw(parseInt(withdrawValue))
}
if (props.method==='transfer'){
  props.handleClickNewTransfer(parseInt(transferValue, transferNewId))
}
} 


return (
  <>

    {props.isOpen && (
      <div id='modalcomponent' className="modal active-modal">
        <div onClick={props.toggleModal} className="overlay"></div>
        <div className="modal-content">
          {props.method === 'deposit' &&<input type="Amount:" id="amount-label" name="depositValue" value={depositValue} placeholder="Enter Amount" onChange={handleChangeDeposit} />}
          {props.method === 'withdraw' &&<input type="Amount:" id="amount-label" name="withdrawValue" value={withdrawValue} placeholder="Enter Amount" onChange={handleChangeWithdraw} />}
          {props.method === 'transfer' &&<input type="number" id="id-label" name="transferNewId" value={transferNewId} placeholder="Enter ID" onChange={handleTransferId} />}
          {props.method === 'transfer' &&<input type="Amount:" id="amount-label" name="transferValue" value={transferValue} placeholder="Enter Amount" onChange={handleChangeTransfer} />}
          <button  onClick={handleSubmit}>Submit</button>
          <button className="close-modal" onClick={props.toggleModal}>
            x
          </button>
        </div>
      </div>
    )}

      </>
);
}