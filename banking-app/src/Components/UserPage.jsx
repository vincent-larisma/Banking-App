import React, { useState } from 'react'
import SideBar from './SideBar'
import HomePage from './HomePage'
import WithdrawPage from './WithdrawPage'
import DepositPage from './DepositPage'
import TransferPage from './TransferPage'
import HistoryPage from './HistoryPage'

export default function UserPage() {
  const [page, setPage] = useState('Home')
  let valueLoggedInIndex = localStorage.getItem('currentIndex')

  const [deposit, setDeposit] = useState()
 
  const handleClickPage = (value) => {
    if (value === 'Home') {
      setPage('Home')
    } else if (value === 'Withdraw') {
      setPage('Withdraw')
    } else if (value === 'Deposit') {
      setPage('Deposit')
    } else if (value === 'Transfer') {
      setPage('Transfer')
    } else if (value === 'History') {
      setPage('History')
    }
  }

  return (
    <>
      <SideBar handleClickPage={handleClickPage} />
      {page === 'Home' && <HomePage index={valueLoggedInIndex} />}
      {page === 'Withdraw' && <WithdrawPage index={valueLoggedInIndex} />}
      {page === 'Deposit' && <DepositPage index={valueLoggedInIndex} />}
      {page === 'Transfer' && <TransferPage index={valueLoggedInIndex} />}
      {page === 'History' && <HistoryPage index={valueLoggedInIndex} />}
    </>
  )
}
