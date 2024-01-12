import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [planets, setPlanets] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setPlanets(data.results);
        } catch (error) {
            console.error( error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <div>

            <h1>species</h1>
            <ul>
                {planets.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection