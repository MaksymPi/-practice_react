import React from 'react'
import { useState } from 'react'

import Button from '../Button/Button'

import './FeedbackSection.css'

const FeedbackSection = () => {
  const [form, setForm] = useState(
    {
      name: '',
      hasError: false,
      reason: 'Server',
    }
  )

  // const [name, setName] = useState('')
  // const [hasError, setHesError] = useState(false)
  // const [reason, setReason] = useState('Server')

  function handleNameChange(event) {
    // setForm({
    //   name: event.target.value,
    //   hasError: event.target.value.trim().length === 0,
    //   reason: form.reason,
    // })
    setForm((prev)=>({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  return (
    <section className='FeedbackSection'>
        <h3>Feedback</h3>

        <form className='form' action="#">

            <label htmlFor="name">Your name</label>
            <input 
              type="text" 
              id='name' 
              className='control' 
              value={form.name} 
              onChange={handleNameChange}
              style={{
                border: form.hasError ? '2px solid red' : null,
              }}
              />

            <label htmlFor="reason">The reason for petition</label>
            <select id="reason" className='control' value={form.reason} onChange = {(event)=> setForm(prev=>({...prev, reason: event.target.value}))}>
              <option value="Informational">Informational responses (100 – 199)</option>
              <option value="Successful">Successful responses (200 – 299)</option>
              <option value="Redirection">Redirection messages (300 – 399)</option>
              <option value="Client">Client error responses (400 – 499)</option>
              <option value="Server">Server error responses (500 – 599)</option>
            </select>
            <Button disabled = {form.hasError }>
              Send
            </Button>
        </form>
        <pre>
          Name:{form.name}
          Reason:{form.reason}
        </pre>
    </section>
  )
}

export default FeedbackSection