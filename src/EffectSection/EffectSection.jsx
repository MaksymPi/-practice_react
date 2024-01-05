import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import Button from '../Button/Button'
import Modal from '../Modal/Modal'

import'./EffectSection.css'

const EffectSection = () => {
    const[modal, setModal] = useState(false)
    const[loading, setLoading] = useState(false)
    const[peoples, setPeoples] = useState([])

    async function fetchUsers() {
      setLoading(true)
      const response = await fetch('https://swapi.dev/api/people/')
      const peoples = await response.json()
      setPeoples(peoples.results)
      setLoading(false)
    }


    useEffect(()=>{
      fetchUsers()
    },[])
  return (
    <section>
        <h3>Effects</h3>
        <Button style={{marginBottom:'1rem'}} onClick={()=>{setModal(true)}}>Open info</Button>
        <Modal open={modal}>
            <h3>Hello from modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quia consectetur debitis quisquam aut illo vero, iste magni esse perferendis. Iusto blanditiis eos itaque mollitia atque ex quis dicta eaque?
            </p>
            <Button onClick={()=>{setModal(false)}}>Close</Button>
        </Modal>

        {loading && <p>Loading...</p>}

        {!loading && peoples.map(people => (
    <ul>
      <li key={people.name}>{people.name}</li>
     </ul>
))}



    </section>
  )
}   

export default EffectSection