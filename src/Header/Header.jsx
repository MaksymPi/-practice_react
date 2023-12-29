import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()),1000)

  return (
    <div className='header'>
    <span className='time'>Time: {now.toLocaleTimeString()}</span>
    <h1>SWAPI</h1>
    </div>
  )
}

export default Header