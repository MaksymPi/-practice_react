import React, { useState, useCallback, useEffect } from 'react'
import Button from '../Button/Button'
import './SectionAttributes.css'




const SectionAttributes = () => {
    const [contentType, setContentType] = useState(null);

    const [api, setApi] = useState({ films: { results: [] }, people: { results: [] },});

    const fetchPeople = useCallback(async () => {
        const response = await fetch('https://swapi.dev/api/');
        const apiData = await response.json();
        console.log(apiData);
        setApi({ ...api, isActive: { results: apiData.results } });
    }, []);

    useEffect(() => {
        fetchPeople();
    }, [fetchPeople]);

    function handleClick(type) {
        setContentType(type);
    }

    return (
        <section className="section-attributes">
            <Button
                className='button'
                isActive={contentType === 'films'}
                onClick={() => handleClick('films')}>
                films
                {contentType === 'films' && (
                    <div>
                        <h1>films</h1>
                        <ul>
                            {api.films.results.map((film, index) => (
                                <li key={index}>{film.title}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Button>

            <Button
                className='button'
                isActive={contentType === 'people'}
                onClick={() => handleClick('people')}>
                people
                {contentType === 'people' && (
                    <div>
                        <h1>people</h1>
                        <ul>
                            {api.people.results.map((person, index) => (
                                <li key={index}>{person.name}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </Button>
        </section>
    );
};


//             <Button className='button'
//                 isActive={contentType === 'planets'}
//                 onClick={() => handleClick('planets')}>
//                 Planets
//             </Button>
//             <Button className='button'
//                 isActive={contentType === 'species'}
//                 onClick={() => handleClick('species')}>
//                 Species
//             </Button>
//             <Button className='button'
//                 isActive={contentType === 'starships'}
//                 onClick={() => handleClick('starships')}>
//                 Starships
//             </Button>
//             <Button className='button'
//                 isActive={contentType === 'vehicles'}
//                 onClick={() => handleClick('vehicles')}>
//                 Vehicles
//             </Button>
//         </section>
//     )
// }

export default SectionAttributes