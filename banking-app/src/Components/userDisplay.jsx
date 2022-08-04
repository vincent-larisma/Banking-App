import React, { useState } from 'react'

export default function UserDisplay() {
  const [user, setUser] = useState({
    userEmail: '',
    userName: '',
    userBalance: 0,
    logsList: [],
    userList: [],
  }) //Contains the user input

  const [newUserBalance, setNewUserBalance] = useState({
    userBalanceDeposit: 0,
    userBalanceWithdraw: 0,
    userTransfer: 0,
    editIndex: '',
  })

  const { editIndex, userBalanceDeposit, userBalanceWithdraw } = newUserBalance
  
  //const [ isUpdateLogs, setIsUpdateLogs ] = useState(false)

  const [ isUpdateDeposit, setIsUpdateDeposit ] = useState(false)
  const [ isUpdateWithdraw, setIsUpdateWithdraw ] = useState(false)
  const [ isUpdateTransfer, setIsUpdateTransfer ] = useState(false)

  //update to true
  const handleClickDeposit = (index) => {
    setIsUpdateDeposit(true)
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    // console.log(newUserBalance)
  }

  const handleChangeDepositUpdate = (e) => {
    const { value, name } = e.target
    setNewUserBalance({ ...newUserBalance, [name]: value })
  }

  //update to true
  const handleClickWithdraw = (index) => {
    setIsUpdateWithdraw(true)
    setNewUserBalance({ ...newUserBalance, editIndex: index })
    // console.log(newUserBalance)
  }

  const handleClickTransfer = (index) =>{
    setIsUpdateTransfer(true)
    setNewUserBalance({ ...newUserBalance, editIndex: index})
  }

  const handleChangeWithdrawUpdate = (e) => {
    const { value, name } = e.target
    setNewUserBalance({ ...newUserBalance, [name]: value })
  }

  // const handleClickTransactions = (index) => {
  //   let list = userList
  //   setIsUpdateLogs(true)
  //   // setNewTransactions({ ...newTransactions, logIndex: index})
  //   // console.log(newTransactions)
  //   // console.log(list)
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
      console.log(list);
      // logHistory('You created your account!', '', editIndex)
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

  const handleClickNewDeposit = () => {
    let list = userList
    list[editIndex].Balance = parseInt(list[editIndex].Balance) + parseInt(userBalanceDeposit)
    setUser({ ...user, userList: list })
    setIsUpdateDeposit(false)
    // logHistory('Deposit', userBalanceDeposit, editIndex)
  }

  const handleClickNewWithdraw = () => {
    let list = userList
    //let logsValue = list.logList
    //console.log(logsValue);
    if ( (parseInt(list[editIndex].Balance) < parseInt(userBalanceWithdraw) ) || (parseInt(userBalanceWithdraw) === 0) ) {
      return false;
    } else {  
      if ( parseInt(userBalanceWithdraw) % 100 === 0 ){
        list[editIndex].Balance = parseInt(list[editIndex].Balance) - parseInt(userBalanceWithdraw)
        setUser({ ...user, userList: list })
        setIsUpdateWithdraw(false)
        console.log(list);
        // logHistory('Withdraw', userBalanceWithdraw, editIndex)
      } else {
        return false;
      }
    }
  }

  // const logHistory = ( transaction, value, index ) => {
  //   let newList = transactionLogs
  //   const transactionList = { Todo: '', Amount: ''}
  //   transactionList[index].Todo = transaction
  //   transactionList[index].Amount = value
  //   newList.push(transactionList)
  //   setNewTransactions({ ...newTransactions, transactionLogs: newList})
  //   setNewTransactions({ ...newTransactions, transaction: '', value: ''})
  //   console.log(newList)
  // }

  return (
    <>
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
                    <button onClick={() => handleClickWithdraw(index)}>Withdraw</button>
                    <button onClick={() => handleClickDeposit(index)}>Deposit</button>
                    <button onClick={() => handleClickTransfer(index)}>TRANSFER</button>
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

    {isUpdateTransfer && (
        <div>
          <span>
            Transfer to: 
                  <div class="elements1">
                    <label class="cstat">Civil Status</label>  
                    <select id="dropdown">
                    <option value = "Single"> Single   
                    </option>  
                    <option value = "Married"> Married   
                    </option>  
                    <option value = "Widowed"> Widowed  
                    </option>  
                    <option value = "Separated"> Separated
                    </option>
                    <option value = "Divoced"> Divorced
                    </option>
                    </select>
                </div>
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

      {/* {isUpdateLogs && (
        <div>
          {transactionLogs.length ? (
            transactionLogs.map(({ Todo, Amount }, index) => {
              return (
                <tr key={index}>
                  <td>{transactionLogs[index].Todo}</td>
                  <td>{transactionLogs[index].Amount}</td>
                </tr>
              )
            })
          ) : (
            <th colSpan='5'>No Transactions Yet</th>
          )}
        </div>
      )} */}
    </>
  )
}