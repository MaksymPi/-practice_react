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
    background-color:#212121;
    color:#FFE300;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
`;

const apiBaseUrl = 'https://swapi.dev/api/';


const SectionAttributes = () => {
    const [contentType, setContentType] = useState(null);
    const [urls, setUrls] = useState(null)

    const fetchUrls = async () => {
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
                    className='category-section'
                    isActive={contentType === 'films'}
                    onClick={() => handleClick('films')}>
                    Films

                </StyledButton>
                {contentType === 'films' && (
                    <Films url={urls.films} />
                )}

            </section>
            <section className='category-section people'>
                <StyledButton
                    className='category-section'
                    isActive={contentType === 'people'}
                    onClick={() => handleClick('people')}>
                    People
                </StyledButton>
                {contentType === 'people' && (
                    <People url={urls.people} />
                )}
            </section>
            <section className='category-section planets'>
                <StyledButton
                    className='category-section'
                    isActive={contentType === 'planets'}
                    onClick={() => handleClick('planets')}>
                    Planets
                </StyledButton>
                {contentType === 'planets' && (
                    <Planets url={urls.planets} />
                )}
            </section>
            <section className='category-section species'>
                <StyledButton
                    className='category-section'
                    isActive={contentType === 'species'}
                    onClick={() => handleClick('species')}>
                    Species
                </StyledButton>
                {contentType === 'species' && (
                    <Species url={urls.species} />
                )}
            </section>
            <section className='category-section starships'>
                <StyledButton
                    className='category-section'
                    isActive={contentType === 'starships'}
                    onClick={() => handleClick('starships')}>
                    Starships
                </StyledButton>
                {contentType === 'starships' && (
                    <Starships url={urls.starships} />
                )}
            </section>
            <section className='category-section vehicles'>
                <StyledButton
                    className='category-section'
                    isActive={contentType === 'vehicles'}
                    onClick={() => handleClick('vehicles')}>
                    Vehicles
                </StyledButton>
                {contentType === 'vehicles' && (
                    <Vehicles url={urls.vehicles} />
                )}
            </section>
        </section>
    );
};

export default SectionAttributes