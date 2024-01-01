import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
  height: 100px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  background: #212121;
  margin-bottom: 50px;
`

const Header = () => {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000)

  return (
    <HeaderContainer>
      <h1>SWAPI</h1>
      <span>Time: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
  )
}

export default Header