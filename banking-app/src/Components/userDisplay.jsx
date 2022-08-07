import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import Clock from './Clock'

export default function UserDisplay() {
  const [user, setUser] = useState({
    userEmail: '',
    userName: '',
    userBalance: 0,
    userList: [],
  }) //Contains the user input

  const [newUserBalance, setNewUserBalance] = useState({
    userBalanceDeposit: 0,
    userBalanceWithdraw: 0,
    userBalanceTransfer: 0,
    userToTransfer: 0,
    editIndex: '',
  })

  const { editIndex, userBalanceDeposit, userBalanceWithdraw, userBalanceTransfer, userToTransfer } = newUserBalance

  const [isUpdateDeposit, setIsUpdateDeposit] = useState(false)
  const [isUpdateWithdraw, setIsUpdateWithdraw] = useState(false)
  const [isUpdateTransfer, setIsUpdateTransfer] = useState(false)

  //update to true
  const handleClickDeposit = (index) => {
    setIsUpdateDeposit(true)
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    console.log(newUserBalance)
  }

  const handleChangeDepositUpdate = (e) => {
    const { value, name } = e.target
    setNewUserBalance({ ...newUserBalance, [name]: value })
  }

  //update to true
  const handleClickWithdraw = (index) => {
    setIsUpdateWithdraw(true)
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    console.log(newUserBalance)
  }

  const handleChangeWithdrawUpdate = (e) => {
    const { value, name } = e.target
    setNewUserBalance({ ...newUserBalance, [name]: value })
  }

  const handleAmountToTransfer = (e) => {
    const { value, name } = e.target
    setNewUserBalance({ ...newUserBalance, [name]: value })
  }

  const handleUserToTransfer = (e) => {
    const { value, name } = e.target
    setNewUserBalance({ ...newUserBalance, [name]: value })
  }

  const handleClickTransfer = (index) => {
    setIsUpdateTransfer(true)
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    console.log(newUserBalance)
  }

  const { userList, userEmail, userBalance, userName } = user

  const [depositModal, setDepositModal] = useState(false)
  const [withdrawModal, setWithdrawModal] = useState(false)
  const [transferModal, setTransferModal] = useState(false)

  const handleChangeName = (e) => {
    const { value, name } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleChangeEmail = (e) => {
    const { value, name } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleChangeBalance = (e) => {
    const { value, name } = e.target
    setUser({ ...user, [name]: value })
  }
  //Push the user input to userList
  const handleClickCreateUser = () => {
    let list = userList
    const listedUsers = { Name: '', Email: '', Balance: 0, ID: Date.now() }
    //Don't create users if email or name is empty
    if (userName !== '' && userEmail !== '') {
      if (!userList.some(emailChecker)) {
        listedUsers.Name = userName
        listedUsers.Email = userEmail
        listedUsers.Balance = userBalance
        list.push(listedUsers)

        setUser({ ...user, userList: list })
        setUser({ ...user, userName: '', userEmail: '', userBalance: 0 }) //input placeholder reset after creating a user
      } else if (userList.some(emailChecker)) {
        alert(`Email ${userEmail} is already in use`)
        setUser({ ...user, userName: '', userEmail: '', userBalance: 0 }) //input placeholder update when there is an error
      }
    }
  }
  //Prevent from reloading
  const handleSubmitUser = (e) => {
    e.preventDefault()
  }

  //Delet User Function
  const handleClickDelete = (index) => {
    let list = userList
    list.splice(index, 1)
    setUser({ ...user, userList: list })
    setIsUpdateWithdraw(false)
    setIsUpdateDeposit(false)
  }

  const handleClickNewDeposit = (value) => {
    let list = userList

    if (value <= 0) {
      alert('Amount Invalid') //deposit amount is negative
    } else {
      list[editIndex].Balance = parseInt(list[editIndex].Balance) + value
      setUser({ ...user, userList: list })
      setIsUpdateDeposit(false)
      console.log('edit index', editIndex)
    }
  }

  const handleClickNewWithdraw = (value) => {
    console.log('withdraw clicked')
    let list = userList

    if (parseInt(list[editIndex].Balance) < value) {
      alert('Amount Invalid') //Withdraw value is less than user balance
    } else {
      if (value % 100 === 0) {
        list[editIndex].Balance = parseInt(list[editIndex].Balance) - value
        setUser({ ...user, userList: list })
        setIsUpdateWithdraw(false)
      } else {
        alert('Amount Invalid') //amount not a multiple of 100
      }
    }
  }

  const handleClickNewTransfer = (value, id) => {
    let list = userList
    let i

    const idChecker = (list) => {
      return list.ID == id
    }
    console.log('value', value, 'ID', id, 'list', list, 'ID CHecker', list.some(idChecker))
    if (parseInt(list[editIndex].Balance) < value) {
      alert('User does not have enough balance') //user has not enough balance to transfer
    }
    if (value <= 0) {
      alert('Invalid amount') //amount is negative or 0
    }
    for (i = 0; i < list.length; i++) {
      if (parseInt(list[i].ID) === parseInt(id)) {
        list[editIndex].Balance = parseInt(list[editIndex].Balance) - value
        list[i].Balance = parseInt(list[i].Balance) + value
      }
    }
    if (!list.some(idChecker)) {
      alert('Id does not exist')
    }

    i = 0
    setIsUpdateTransfer(false)
  }

  const toggleDepositModal = (index) => {
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    setDepositModal(!depositModal)
  }
  const toggleWithdrawModal = (index) => {
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    setWithdrawModal(!withdrawModal)
  }

  const toggleTransferModal = (index) => {
    let list = userList
    if (list.length === 0) {
      alert('No Users Yet') // no users yet
    }
    if (list.length === 1) {
      alert('You only have 1 user') // only 1 user
    }
    console.log('Transfer Modal')
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    setTransferModal(!transferModal)
  }

  const emailChecker = (object) => {
    return object.Email === userEmail
  }

  const userListLocal = [
    { Name: 'Vincent Larisma', Email: 'vincentlarisma@gmail.com', Balance: 0, ID: 1659750502716 },
    { Name: 'April Zarate', Email: 'aprilzarate@gmail.com', Balance: '10000', ID: 1659750523317 },
    { Name: 'Gene Alvarez', Email: 'genealvarez@gmail.com', Balance: '100000', ID: 1659750544185 },
    { Name: 'John Doe', Email: 'johndoe@gmail.com', Balance: '69000', ID: 1659750557301 },
  ]

  useEffect(() => {
    localStorage.setItem('userListKey', JSON.stringify(userListLocal))
  }, [])

  return (
    <>
      <Modal
        method='deposit'
        isOpen={depositModal}
        toggleModal={toggleDepositModal}
        handleClickNewDeposit={handleClickNewDeposit}
      />
      <Modal
        method='withdraw'
        isOpen={withdrawModal}
        toggleModal={toggleWithdrawModal}
        handleClickNewWithdraw={handleClickNewWithdraw}
      />
      <Modal
        method='transfer'
        isOpen={transferModal}
        toggleModal={toggleTransferModal}
        handleClickNewTransfer={handleClickNewTransfer}
      />

      <div className='grid'>
        <div className='container notification mt-3'>
          <div className='subtitle'>
            <span className='icon-text'>
              <span className='icon'>
                <i className='fa-solid fa-user'></i>
              </span>
              <span>Total Users</span>
            </span>
          </div>
          <div className='title flex-center'>{userList.length}</div>
        </div>
        <div className='container notification mt-3 grid-clock '>
          <div className='subtitle text-center'>
            <span class='icon-text'>
              <span class='icon'>
                <i class='fa-solid fa-download'></i>
              </span>
              <span>LocalStorage</span>
            </span>
            <div className='mt-2'>
              <button
                className='button is-danger is-small'
                onClick={() => {
                  for (let i = 0; i < userListLocal.length; i++) {
                    userList.push(JSON.parse(localStorage.getItem('userListKey'))[i])
                  }
                }}>
                Local Storage
              </button>
            </div>
          </div>
        </div>
        <div className='box container grid-create-user form-size'>
          <h2 className='subtitle text-center'>Create User</h2>
          <form onSubmit={handleSubmitUser}>
            <div className='field pl-4'>
              <label className='label'>Name:</label>
              <input type='text' name='userName' value={userName} required onChange={handleChangeName} />
            </div>
            <div className='field pl-4'>
              <label className='label'>Email:</label>
              <input type='email' name='userEmail' value={userEmail} required onChange={handleChangeEmail} />
            </div>

            <div className='field pl-4 balance-input'>
              <label className='label'>Balance:</label>
              <input type='number' name='userBalance' value={userBalance} onChange={handleChangeBalance} />
              <span>(Optional)</span>
            </div>
            <button className='ml-4 button is-success is-small' type='submit' onClick={handleClickCreateUser}>
              Create User
            </button>
          </form>
        </div>

        <table className='table table-size table is-bordered is-striped is-narrow is-hoverable is-fullwidth grid-table mb-6'>
          <caption>
            <h1 className='title m-4'>Bank Users</h1>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Displays the userList  */}
            {userList.length ? (
              userList.map(({ Name, Email, Balance, ID }, index) => {
                return (
                  <tr key={index}>
                    <td>{Name}</td>
                    <td>{ID}</td>
                    <td>{Email}</td>
                    <td>${Balance}</td>
                    <td>
                      <button className='button is-primary m-1' onClick={() => toggleWithdrawModal(index)}>
                        Withdraw
                      </button>
                      <button className='button is-primary m-1' onClick={() => toggleDepositModal(index)}>
                        Deposit
                      </button>
                      <button className='button is-primary m-1' onClick={() => toggleTransferModal(index)}>
                        TRANSFER
                      </button>
                      <button className='button is-danger m-1' onClick={() => handleClickDelete(index)}>
                        DELETE USER
                      </button>
                      {/* <button onClick={() => handleClickTransactions(index)}>Transactions</button> */}
                    </td>
                  </tr>
                )
              })
            ) : (
              <th
                colSpan='5'
                className='table-size subtitle'
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  paddingTop: '50%',
                }}>
                No Users Yet
              </th>
            )}
          </tbody>
        </table>

        {isUpdateTransfer && (
          <div>
            <span>
              {userList[editIndex].Name} {userList[editIndex].ID}
            </span>
            <input type='number' name='userToTransfer' value={userToTransfer} onChange={handleUserToTransfer} />
            <input
              type='number'
              name='userBalanceTransfer'
              value={userBalanceTransfer}
              onChange={handleAmountToTransfer}
            />
            <button onClick={handleClickNewTransfer}>Transfer</button>
          </div>
        )}
      </div>

      {/* {depositModal && (
        <div>
          <span>
            {userList[editIndex].Name} {userList[editIndex].ID}
          </span>
          <input
            type='number'
            name='userBalanceDeposit'
            value={userBalanceDeposit}
            onChange={handleChangeDepositUpdate}
          />
          <button onClick={handleClickNewDeposit}>Deposit</button>
        </div>
      )} */}
      {isUpdateWithdraw && (
        <div>
          <span>
            {userList[editIndex].Name} {userList[editIndex].ID}
          </span>
          <input
            type='number'
            name='userBalanceWithdraw'
            value={userBalanceWithdraw}
            onChange={handleChangeWithdrawUpdate}
          />
          <button onClick={handleClickNewWithdraw}>Withdraw</button>
        </div>
      )}
    </>
  )
}
