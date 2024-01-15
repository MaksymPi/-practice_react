import React from 'react'
import { useState, useEffect } from 'react'

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
            console.error( error);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <>
{loading && <p>Loading...</p>}
            <h1>species</h1>
            <ul>
                {planets.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>

        </>
    )
}

export default PeopleSection