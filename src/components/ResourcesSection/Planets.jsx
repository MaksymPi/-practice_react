import React from 'react'
import { useState, useEffect } from 'react'

import { ResourcesSectionStyled as Styled } from '../ResourcesSection/ResourcesSection.styled'

const PeopleSection = ({ url }) => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setPlanets(data.results);
        } catch (error) {
            console.error(error);
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
                {planets.map((person, index) => (
                    <Styled.Li key={index}>{person.name}</Styled.Li>
                ))}
            </Styled.Ul>

        </Styled.Category>
    )
}

export default PeopleSection