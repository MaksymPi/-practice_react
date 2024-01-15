import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setVehicles(data.results);
        } catch (error) {
            console.error( error);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <div>
{loading && <p>Loading...</p>}
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