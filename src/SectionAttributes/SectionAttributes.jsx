import React, { useState } from 'react'
import Button from '../Button/Button'
import './SectionAttributes.css'




const SectionAttributes = () => {
    const [contentType, setContentType] = useState(null)

    function handleClick(type) {
      setContentType(type)
    }

    return (
        <section className="section-attributes">
            <Button
                className='button'
                isActive={contentType === 'films'}
                onClick={() => handleClick('films')}>
                Films
            </Button>
            <Button
                className='button'
                isActive={contentType === 'people'}
                onClick={() => handleClick('people')}>
                People
            </Button>
            <Button className='button'
                isActive={contentType === 'planets'}
                onClick={() => handleClick('planets')}>
                Planets
            </Button>
            <Button className='button'
                isActive={contentType === 'species'}
                onClick={() => handleClick('species')}>
                Species
            </Button>
            <Button className='button'
                isActive={contentType === 'starships'}
                onClick={() => handleClick('starships')}>
                Starships
            </Button>
            <Button className='button'
                isActive={contentType === 'vehicles'}
                onClick={() => handleClick('vehicles')}>
                Vehicles
            </Button>
        </section>
    )
}

export default SectionAttributes