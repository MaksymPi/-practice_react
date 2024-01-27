import { useEffect } from 'react'
import { useState } from 'react'


import { HeaderContainer } from './Header.styled'


const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(()=>{
    const interval = setInterval(() => setNow(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  },[])

  return (
    <HeaderContainer>
      <h1>SWAPI</h1>
      <span>Time: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}

export default Header