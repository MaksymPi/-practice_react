import React, { useState, useCallback, useEffect } from 'react'
import Button from '../Button/Button'
import Films from '../ResourcesSection/Films';
import People from '../ResourcesSection/People';
import Planets from '../ResourcesSection/Planets';
import Species from '../ResourcesSection/Species';
import Starships from '../ResourcesSection/Starships';
import Vehicles from '../ResourcesSection/Vehicles';
import styled from 'styled-components';

import '../ResourcesSection/ResourcesSection.css'
import './CategorySection.css'

const StyledButton = styled.button`
    margin: 5px;
    padding: 10px;
`;

const apiBaseUrl = 'https://swapi.dev/api/';


const SectionAttributes = () => {
    const [contentType, setContentType] = useState(null);
    const [urls, setUrls] = useState(null)

    const fetchUrls  = async () => {
        try {
            const response = await fetch(apiBaseUrl);
            const data = await response.json();
            console.log(data);

            setUrls({
                films: data.films,
                people: data.people,  
                planets: data.planets,  
                species: data.species,  
                starships: data.starships,  
                vehicles: data.vehicles,  
            });
        } catch (error) {
            console.error('Помилка при отриманні даних з API:', error);
        }
    };

    useEffect(() => {
        fetchUrls();
    }, []);

    function handleClick(type) {
        setContentType(type);
    }

    return (
        <section className="section-attributes">
            <section className='category-section films'>           
                 <StyledButton
                className='button-category-section'
                isActive={contentType === 'films'}
                onClick={() => handleClick('films')}>
                Films 
                
            </StyledButton>
            {contentType === 'films' && (
                    <Films url={urls.films} />
                    )}
            
            </section>

            <Button
                className='button'
                isActive={contentType === 'people'}
                onClick={() => handleClick('people')}>
                people
                {contentType === 'people' && (
                    <People url={urls.people} />
                )}
            </Button>
            <Button
                className='button'
                isActive={contentType === 'planets'}
                onClick={() => handleClick('planets')}>
                planets
                {contentType === 'planets' && (
                    <Planets url={urls.planets} />
                )}
            </Button>
            <Button
                className='button'
                isActive={contentType === 'species'}
                onClick={() => handleClick('species')}>
                species
                {contentType === 'species' && (
                    <Species url={urls.species} />
                )}
            </Button>
            <Button
                className='button'
                isActive={contentType === 'starships'}
                onClick={() => handleClick('starships')}>
                starships
                {contentType === 'starships' && (
                    <Starships url={urls.starships} />
                )}
            </Button>
            <Button
                className='button'
                isActive={contentType === 'vehicles'}
                onClick={() => handleClick('vehicles')}>
                vehicles
                {contentType === 'vehicles' && (
                    <Vehicles url={urls.vehicles} />
                )}
            </Button>
        </section>
    );
};

export default SectionAttributes