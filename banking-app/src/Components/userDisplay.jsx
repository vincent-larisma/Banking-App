import React, { useState } from 'react'

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
    editIndex: '',
  })

  // const [newTransactions, setNewTransactions] = useState({
  //   transactionLogs: '',
  //   logIndex: ''
  // })

  const { editIndex, userBalanceDeposit, userBalanceWithdraw } = newUserBalance
  // const { logIndex, transactionLogs} = newTransactions
  // const { isUpdateLogs, setIsUpdateLogs } = useState(false)
  const [isUpdateDeposit, setIsUpdateDeposit] = useState(false)
  const [isUpdateWithdraw, setIsUpdateWithdraw] = useState(false)

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

  // const handleClickTransactions = (index) => {
  //   setIsUpdateLogs(true)
  //   setNewTransactions({ ...newTransactions, logIndex: index})
  //   console.log(newTransactions)
  // }

  // const handleUpdateTransactions = (e) => {

  // }

  const { userList, userEmail, userBalance, userName } = user

  //HandleChange function for the user input
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
      listedUsers.Name = userName
      listedUsers.Email = userEmail
      listedUsers.Balance = userBalance
      list.push(listedUsers)
      setUser({ ...user, userList: list })
      setUser({ ...user, userName: '', userEmail: '', userBalance: 0 })
      // logHistory(index);
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

  const handleClickNewDeposit = () => {
    let list = userList
    list[editIndex].Balance = parseInt(list[editIndex].Balance) + parseInt(userBalanceDeposit)
    setUser({ ...user, userList: list })
    setIsUpdateDeposit(false)
    // logHistory(index)
  }

  const handleClickNewWithdraw = () => {
    let list = userList
    if (parseInt(list[editIndex].Balance) < parseInt(userBalanceWithdraw)) {
      return false
    } else {
      if (parseInt(userBalanceWithdraw) % 100 === 0) {
        list[editIndex].Balance = parseInt(list[editIndex].Balance) - parseInt(userBalanceWithdraw)
        setUser({ ...user, userList: list })
        setIsUpdateWithdraw(false)
        // logHistory(index)
      } else {
        return false
      }
    }
  }

  return (
    <>
      <div className='box container'>
        <h2 className='subtitle'>Create User</h2>
        <form onSubmit={handleSubmitUser}>
          <div className='field'>
            <label className='label'>Name:</label>
            <input type='text' name='userName' value={userName} required onChange={handleChangeName} />
          </div>
          <div className='field'>
            <label className='label'>Email:</label>
            <input type='email' name='userEmail' value={userEmail} required onChange={handleChangeEmail} />
          </div>

          <div className='field balance-input'>
            <label className='label'>Balance:</label>
            <input type='number' name='userBalance' value={userBalance} onChange={handleChangeBalance} />
            <span>(Optional)</span>
          </div>
          <button className='button is-success is-small' type='submit' onClick={handleClickCreateUser}>
            Create User
          </button>
        </form>
      </div>

      <table className='table is-striped is-narrow is-hoverable is-fullwidth'>
        <caption>
          {' '}
          <h1 className='title'>Bank Users</h1>
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
          <tr>
            <td>John Doe</td>
            <td>0909090909</td>
            <td>testEmail@gmail.com</td>
            <td>$0</td>
            <td>
              <button className='button is-primary'>WITHDRAW</button>
              <button className='button is-primary'>TRANSFER</button>
              <button className='button is-danger'>DELETE USER</button>
            </td>
          </tr>
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
                    <button className='button is-primary' onClick={() => handleClickWithdraw(index)}>
                      Withdraw
                    </button>
                    <button className='button is-primary' onClick={() => handleClickDeposit(index)}>
                      Deposit
                    </button>
                    <button className='button is-primary'>TRANSFER</button>
                    <button className='button is-danger' onClick={() => handleClickDelete(index)}>
                      DELETE USER
                    </button>
                    {/* <button onClick={() => handleClickTransactions(index)}>Transactions</button> */}
                  </td>
                </tr>
              )
            })
          ) : (
            <th colSpan='5'>No Users Yet</th>
          )}
        </tbody>
      </table>
      {isUpdateDeposit && (
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
      )}
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
