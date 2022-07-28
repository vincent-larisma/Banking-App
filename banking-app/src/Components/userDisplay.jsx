import React, { useState } from 'react'

export default function UserDisplay() {
  const [user, setUser] = useState({
    userEmail: '',
    userName: '',
    userBalance: 0,
    userList: [],
  })

  const { userList, userEmail, userBalance, userName } = user

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
  const handleClickCreateUser = (e) => {
    let list = userList
    const listedUsers = { Name: '', Email: '', Balance: 0, ID: Date.now() }
    listedUsers.Name = userName
    listedUsers.Email = userEmail
    listedUsers.Balance = userBalance
    list.push(listedUsers)
    setUser({ ...user, userList: list })
  }
  return (
    <>
      <div>
        <h2>Create User</h2>
        <form>
          <div>
            <span>Name:</span>
            <input type='text' name='userName' onChange={handleChangeName} required />
          </div>
          <div>
            <span>Email:</span>
            <input type='email' name='userEmail' required onChange={handleChangeEmail} />
          </div>

          <div>
            <span>Balance:</span>
            <input type='number' name='userBalance' onChange={handleChangeBalance} />
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
          {userList.length ? (
            userList.map(({ Name, Email, Balance, ID }, index) => {
              return (
                <tr>
                  <td>{Name}</td>
                  <td>{ID}</td>
                  <td>{Email}</td>
                  <td>${Balance}</td>
                  <td>
                    <button>WITHDRAW</button>
                    <button>TRANSFER</button>
                    <button>DELETE USER</button>
                  </td>
                </tr>
              )
            })
          ) : (
            <span>No records</span>
          )}
        </tbody>
      </table>
    </>
  )
}
