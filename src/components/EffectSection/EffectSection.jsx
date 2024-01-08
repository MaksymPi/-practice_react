import React from 'react'
import { useEffect, useState, useCallback } from 'react'


import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import useInput from '../../hooks/useInput'

import './EffectSection.css'

const EffectSection = () => {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [peoples, setPeoples] = useState([])

  const fetchPeoples = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://swapi.dev/api/people/')
    const peoples = await response.json()
    setPeoples(peoples.results)
    setLoading(false)
  }, [])



  useEffect(() => {
    fetchPeoples()
  }, [fetchPeoples])

  return (
    <section>
      <h3>Effects</h3>
      <Modal open={modal}>
        <h3>
          {peoples.map(people => (
            <span key={people.name}>{people.name}</span>
          ))}
        </h3>
        <ul>
          <li></li>
        </ul>
        <Button onClick={() => { setModal(false) }}>Close</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className='control' {...input} />
          <ul>
            {peoples
              .filter(people => people.name.toLowerCase().includes(input.value.toLowerCase()))
              .map(people => (
                <li onClick={() => { setModal(true) }} key={people.name}>{people.name}</li>
              ))}

          </ul>
        </>
      )}




    </section>
  )
}

export default EffectSection