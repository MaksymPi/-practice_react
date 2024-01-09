import React, { useState, useCallback, useEffect } from 'react'
import Button from '../Button/Button'
import './SectionAttributes.css'




const SectionAttributes = () => {
    const [contentType, setContentType] = useState(null)

    const [api, setApi] = useState({ films: [], people: [], /* другие категории */ });

    const fetchPeoples = useCallback(async () => {
        const response = await fetch('https://swapi.dev/api/');
        const apiData = await response.json();
        setApi(apiData);
    }, [])



    useEffect(() => {
        fetchPeoples()
    }, [fetchPeoples])


    function handleClick(type) {
        setTimeout(() => {
            setContentType(type);
        }, 2000)
    }
console.log(Object.entries(api.films));
    return (
        <section className="section-attributes">
            <Button
                className='button'
                isActive={contentType === 'films'}
                onClick={() => handleClick('films')}>
                Films
                {contentType === 'films' && (
                    <div>
                        <h1>Films</h1>
                        <ul>
                            {Object.entries(api.films).map((key, value) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}

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