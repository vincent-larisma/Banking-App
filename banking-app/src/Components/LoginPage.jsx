import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//Component
import Navbar from './Navbar'
import Footer from './Footer'

export default function LoginPage() {
  useEffect(() => {
    if (userListLocalStorage != undefined) {
      //do nothing
    } else {
      localStorage.setItem('userListKey', JSON.stringify(userListLocal))
    }
  }, [])
  let userListLocalStorage = JSON.parse(localStorage.getItem('userListKey'))

  const navigate = useNavigate()
  const [dataBase, setDataBase] = useState({
    name: '',
    password: '',
  })

  const { userName, password } = dataBase

  const dataBaseList = [{ name: 'admin', password: 'admin', userType: 'admin' }]

  const handleChangeName = (e) => {
    const { value, name } = e.target
    setDataBase({ ...dataBase, [name]: value })
  }
  const handleChangePass = (e) => {
    const { value, name } = e.target
    setDataBase({ ...dataBase, [name]: value })
  }

  const userListLocal = [
    {
      UserName: 'vince',
      Password: 'vince',
      FullName: 'Vincent Larisma',
      Email: 'vincentlarisma@gmail.com',
      Gender: 'M',
      Balance: 0,
      ID: 1659750502716,
    },
    {
      UserName: 'april',
      Password: 'april',
      FullName: 'April Zarate',
      Email: 'aprilzarate@gmail.com',
      Balance: '10000',
      ID: 1659750523317,
    },
    {
      UserName: 'gene',
      Password: 'gene',
      FullName: 'Gene Alvarez',
      Email: 'genealvarez@gmail.com',
      Balance: '100000000',
      ID: 1659750544185,
    },
    {
      UserName: 'john',
      Password: 'john',
      FullName: 'John Doe',
      Email: 'johndoe@gmail.com',
      Balance: '69000',
      ID: 1659750557301,
    },
  ]

  const nameCheck = (object) => {
    return object.name === userName
  }
  const UsernameCheck = (object) => {
    return object.UserName === userName
  }

  const passwordCheck = (object) => {
    return object.Password === password
  }
  const passCheck = (object) => {
    return object.password === password
  }

  const handleClickSubmit = () => {
    if (password !== '' && userName !== '') {
      if (dataBaseList.some(nameCheck) && dataBaseList.some(passCheck)) {
        navigate('/Dashboard')
      } else if (userListLocalStorage.some(UsernameCheck) && userListLocalStorage.some(passwordCheck)) {
        for (let i = 0; i < userListLocalStorage.length; i++) {
          if (userListLocalStorage[i].UserName == userName && userListLocalStorage[i].Password == password) {
            localStorage.setItem('currentIndex', JSON.stringify(i))
            navigate('/User')
          }
        }
      } else {
        alert('Please enter the correct username and password!')
      }
    }
  }

  const handleClickRegister = () => {
    navigate('/Register')
  }

  return (
    <>
      <Navbar />
      <div className='container grid login-form flex-container '>
        <div className='field m-6 grid-login notification grid-center is-info is-light'>
          <div className='title text-center'>Bank</div>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='text'
                placeholder='Username'
                name='userName'
                value={userName}
                onChange={handleChangeName}
              />
              <span className='icon is-small is-left'>
                <i className='fa-solid fa-user'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={handleChangePass}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <a className='is-size-7 pb-3' onClick={handleClickRegister}>
            Create User?
          </a>
          <button className='button is-success m-2' onClick={handleClickSubmit}>
            Login
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
