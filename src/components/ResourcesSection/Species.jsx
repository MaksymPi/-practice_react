import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [species, setSpecies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setSpecies(data.results);
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
                {species.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection