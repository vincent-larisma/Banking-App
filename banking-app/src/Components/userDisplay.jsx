import React, { useState } from 'react'
import Modal from './Modal'

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
    editIndex: 0,
  })

  // const [newTransactions, setNewTransactions] = useState({
  //   transactionLogs: '',
  //   logIndex: ''
  // })

  const { editIndex, userBalanceDeposit, userBalanceWithdraw } = newUserBalance
  // const { logIndex, transactionLogs} = newTransactions
  // const { isUpdateLogs, setIsUpdateLogs } = useState(false)
  const [ isUpdateDeposit, setIsUpdateDeposit ] = useState(false)
  const [ isUpdateWithdraw, setIsUpdateWithdraw ] = useState(false)

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

  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);

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
    
  }

  const handleClickNewDeposit = (value) => {
    let list = userList
    list[editIndex].Balance = parseInt(list[editIndex].Balance) + value;
    setUser({ ...user, userList: list });
    setIsUpdateDeposit(false);  
  }

  const handleClickNewWithdraw = () => {
    console.log('withdraw clicked')
    let list = userList
    if (parseInt(list[editIndex].Balance) < parseInt(userBalanceWithdraw) ) {
      return false;

    } else {  
      if ( parseInt(userBalanceWithdraw) % 100 === 0 ){
        list[editIndex].Balance = parseInt(list[editIndex].Balance) - parseInt(userBalanceWithdraw)
        setUser({ ...user, userList: list })
        setIsUpdateWithdraw(false)
        // logHistory(index)
      } else {
        return false;
      }
    }
  }

  const toggleDepositModal = () => {
    setDepositModal(!depositModal);
  }
    const toggleWithdrawModal = () => {
      setWithdrawModal(!withdrawModal);
  };

  return (
    <>
    
    <Modal method='deposit' index={editIndex} isOpen={depositModal} toggleModal={toggleDepositModal} handleClickNewDeposit={handleClickNewDeposit}/>
    <Modal method='withdraw' isOpen={withdrawModal} toggleModal={toggleWithdrawModal} handleClickNewWithdraw={handleClickNewWithdraw}/>
   
      <div>
        <h2>Create User</h2>
        <form onSubmit={handleSubmitUser}>
          <div>
            <span>Name:</span>
            <input type='text' name='userName' value={userName} required onChange={handleChangeName} />
          </div>
          <div>
            <span>Email:</span>
            <input type='email' name='userEmail' value={userEmail} required onChange={handleChangeEmail} />
          </div>

          <div>
            <span>Balance:</span>
            <input type='number' name='userBalance' value={userBalance} onChange={handleChangeBalance} />
            <span>(Optional)</span>
          </div>
          <button type='submit' onClick={handleClickCreateUser}>
            Create User
          </button>
        </form>
      </div>

      <table>
        <caption>
          <h2>Bank Users</h2>
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
              <button>WITHDRAW</button>
              <button>DEPOSIT</button>
              <button>TRANSFER</button>
              <button>DELETE USER</button>
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
                    <button onClick={() => toggleWithdrawModal()}>Withdraw</button>
                    <button onClick={() => toggleDepositModal()}>Deposit</button>
                    <button>TRANSFER</button>
                    <button onClick={() => handleClickDelete(index)}>DELETE USER</button>
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