import React from 'react'
import { useState } from 'react'

import classes from './Header.module.css'

const Header = () => {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000)

  return (
    <div className= {classes.header}>
      <h1>SWAPI</h1>
      <span className={classes.time}>Time: {now.toLocaleTimeString()}</span>
    </div>
  )
}

export default Header