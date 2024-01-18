import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setSpecies(data.results);
        } catch (error) {
            console.error( error);
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <div className='category species'>
{loading && <p>Loading...</p>}
            <ul>
                {species.map((person, index) => (
                    <li key={index}>{person.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection