import React from 'react'
import { useState, useEffect } from 'react'

import { ResourcesSectionStyled as Styled } from '../ResourcesSection/ResourcesSection.styled'

const PeopleSection = ({ url }) => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setFilms(data.results);
        } catch (error) {
            console.error( error);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    
    return (
        <Styled.Category>
            {loading && <p>Loading...</p>}
            <Styled.Ul>
                {films.map((results, index) => (
                    <Styled.Li key={index}>{results.title }</Styled.Li>
                ))}
            </Styled.Ul>

        </Styled.Category>
    )
}

export default PeopleSection