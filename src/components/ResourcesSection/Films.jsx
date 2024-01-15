import React from 'react'
import { useState, useEffect } from 'react'
import Modal from '../Modal/Modal';

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
        <div>
            {loading && <p>Loading...</p>}
            <h2>people</h2>
            <ul>
                {films.map((results, index) => (
                    <li key={index}>{results.title }</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection