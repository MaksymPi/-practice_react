import React from 'react'
import { useState, useEffect } from 'react'

const PeopleSection = ({ url }) => {
    const [films, setFilms] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            setFilms(data.results);
        } catch (error) {
            console.error( error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);


    return (
        <div>

            <h1>people</h1>
            <ul>
                {films.map((results, index) => (
                    <li key={index}>{results.title }</li>
                ))}
            </ul>

        </div>
    )
}

export default PeopleSection