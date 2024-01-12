import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [people, setPeople] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setPeople(data.results);
        } catch (error) {
            console.error('Помилка при отриманні даних про людей:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <div>

            <h1>people</h1>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name }</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection