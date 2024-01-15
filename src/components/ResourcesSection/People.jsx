import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setPeople(data.results);
        } catch (error) {
            console.error('Помилка при отриманні даних про людей:', error);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <>
            {loading && <p>Loading...</p>}
            <h1>people</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>

        </>
    )
}

export default PeopleSection