import React, { useState, useEffect } from 'react'

export default function Clock() {
  const time = new Date()
  const [clock, setClock] = useState()

  useEffect(() => {
    setInterval(() => {
      setClock(time.toLocaleTimeString())
    }, 2000)
  }, [time])
  return (
    <div className='container text-center'>
      <div className='is-size-6'>{time.toLocaleDateString()}</div>
      <div className='is-size-6'>{clock}</div>
    </div>
  )
}
