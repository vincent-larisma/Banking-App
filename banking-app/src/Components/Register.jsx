import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// //Component
// import Navbar from './Navbar'
// import Footer from './Footer'

export default function Register(props) {
const navigate = useNavigate()

const [list, setList] = useState({
userEmail: '',
userName: '',
userPassword: '',
userGender: '',
userBalance: 0,
userList: [],
})

const { userList, userName, userPassword, userFullName, userEmail, userGender, userBalance } = list

function getFormValues(){
    const storedValues = localStorage.getItem('form');
    if (!storedValues) return{
        userEmail: '',
        userName: '',
        userFullName: '',
        userPassword: '',
        userGender: '',
        userBalance: 0,
        userList: [],
    }
    return JSON.stringify(storedValues);
}

const handleSubmitUser = (e) => {
    e.preventDefault()
}

const handleUsername = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
}

const handleUserPassword = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
}

const handleUserFullName = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
}

const handleUserEmail = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
}

const handleUserGender = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
}

const handleUserBalance = (e) => {
    const { value, name } = e.target
    setList({ ...list, [name]: value })
}

// const arr = [1, 2, 3, 4, 5]

// const jsonArr = JSON.stringify(arr);

// localStorage.setItem("array", jsonArr);

// const str = localStorage.getItem("array");

// const parsedArr = JSON.parse(str)

// console.log(parsedArr);

const userListLocal = [
        { UserName: 'vince', Password: 'vince', FullName: 'Vincent Larisma', Email: 'vincentlarisma@gmail.com', Gender: 'M', Balance: 0, ID: 1659750502716 },
        { UserName: 'april', Password: 'april', FullName: 'April Zarate', Email: 'aprilzarate@gmail.com', Balance: '10000', ID: 1659750523317 },
        { UserName: 'gene', Password: 'gene', FullName: 'Gene Alvarez', Email: 'genealvarez@gmail.com', Balance: '100000', ID: 1659750544185 },
        { UserName: 'john', Password: 'john', FullName: 'John Doe', Email: 'johndoe@gmail.com', Balance: '69000', ID: 1659750557301 }
    ]
  

  useEffect(() => {
    localStorage.setItem('userListKey', JSON.stringify(userListLocal))
  }, [])

const handleClickRegister = (e) => {
    let newList = userList
    let test2

    let listedUsers = { UserName: '', Password: '', FullName: '', Email: '', Gender: '', Balance: 0, ID: Date.now(), isAdmin: false }
    listedUsers.UserName = userName;
    listedUsers.Password = userPassword
    listedUsers.FullName = userFullName
    listedUsers.Email = userEmail
    listedUsers.Gender = userGender
    listedUsers.Balance = userBalance 
    test2 = JSON.parse(localStorage.getItem("userListKey"));
    
    if ( test2 === null) {
        newList = []
        // console.log(newList.index) 
    } else {
        test2 = JSON.parse(localStorage.getItem("userListKey"));
        console.log(listedUsers)
    }
    test2.push(listedUsers);
    console.log(test2)
    localStorage.setItem("userListKey", JSON.stringify(test2));
    // localStorage.setItem("userListKey", JSON.stringify(newList))
    // newList.push(listedUsers)
    setList({ ...list, userList: newList })
    // console.log(newList)
    navigate('/Login')
    // props.onThis(newList);
}

//   const nameCheck = (object) => {
//     return object.name === name
//   }

//   const passCheck = (object) => {
//     return object.password === password
//   }

  return (
    <>
    {/* <Navbar /> */}
    <form onSubmit={handleSubmitUser}>
        <div className= 'create-user-form container grid login-form flex-container '>
            <div className='field m-6 grid-login notification grid-center is-info is-light'>
                <div className='create-user-title title text-center'>Create User</div>
                <div className='username field'>   
                    <label className='username-label'>Username</label>
                    <input
                    className='input'
                    type='text'
                    placeholder='Username'
                    name='userName'
                    value={userName}
                    onChange={handleUsername}
                    />
                </div>
                <div className='password'>   
                    <label className='password-label'>Password</label>
                    <input
                    className='input'
                    type='password'
                    placeholder='Password'
                    name='userPassword'
                    value={userPassword}
                    onChange={handleUserPassword}
                    />
                </div>
                <div className='name'>   
                    <label className='name-label'>Full Name</label>
                    <input
                    className='input'
                    type='text'
                    placeholder='Name'
                    name='userFullName'
                    value={userFullName}
                    onChange={handleUserFullName}
                    />
                </div>
                <div className='email'>   
                    <label className='email-label'>E-Mail</label>
                    <input
                    className='input'
                    type='email'
                    placeholder='E-Mail'
                    name='userEmail'
                    value={userEmail}
                    onChange={handleUserEmail}
                    />
                </div>
                <form className='gender'>   
                    <p>Gender</p>
                    <input
                    className='radio'
                    type='radio'
                    name='userGender'
                    value='male'
                    onChange={handleUserGender}
                    />
                    <label for="label-male">M</label>
                    <input
                    className='input-genderF'
                    type='radio'
                    name='userGender'
                    value='female'
                    onChange={handleUserGender}
                    />
                    <label for="label-female">F</label>
                </form>
                <div className='initial-balance'>   
                    <label className='initial-balance-label'>Balance</label>
                    <input
                    className='input-balance'
                    type='number'
                    placeholder='Initial Deposit (Optional)'
                    name='userBalance'
                    value={userBalance}
                    onChange={handleUserBalance}
                    />
                </div>
                
                <button className='button is-success m-2' onClick={handleClickRegister}>
                Register
                </button>
            </div>
        </div>
    </form>
    
      {/* <Footer /> */}
    </>
  )
}
