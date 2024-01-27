import React from 'react'
import { useEffect, useState, useCallback } from 'react'

import uniqid from 'uniqid';


import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import useInput from '../../hooks/useInput'
import CharacterProperties from '../CharacterProperties/CharacterProperties';

import './NamesOfHeroes.css'


const EffectSection = () => {
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [peoples, setPeoples] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)

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
      <h3>Names of heroes</h3>
      <Modal open={modal} character={selectedCharacter} onClose={() => setModal(false)}>
        <h3>
          {selectedCharacter?.name}
        </h3>
        <CharacterProperties selectedCharacter={selectedCharacter} />
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
                <li onClick={() => { setSelectedCharacter(people); setModal(true) }} key={uniqid()}>
                  {people.name}
                </li>
              ))}
          </ul>
        </>
      )}




    </section>
  )
}

export default EffectSection