import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [vehicles, setVehicles] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setVehicles(data.results);
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
                {vehicles.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection