import React, { useState } from 'react'
import './Button.css'

const Button = ({children}) => {

  const [content, setContent] = useState('fsdfsdf');
  console.log(content);
  console.log(setContent);

  function handleClick() {
    setContent({children})
    console.log({children});
  }
  return (
    <button className='button' onClick={handleClick}>{children}</button>
  )
}

export default Button