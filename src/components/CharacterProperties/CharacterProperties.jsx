import React from 'react'

import uniqid from 'uniqid';

const CharacterProperties = ({ selectedCharacter }) => {
  const characterProperties = [
    { label: 'height', property: selectedCharacter?.height },
    { label: 'mass', property: selectedCharacter?.mass },
    { label: 'hair color', property: selectedCharacter?.hair_color },
    { label: 'skin color', property: selectedCharacter?.skin_color },
    { label: 'eye color', property: selectedCharacter?.eye_color },
    { label: 'birth year', property: selectedCharacter?.birth_year },
  ];

  return (
    <ul>
      {characterProperties.map((property) => (
        <li key={uniqid()}>
          {`${property.label}: ${property.property}`}
        </li>
      ))}
    </ul>
  );
};

export default CharacterProperties;