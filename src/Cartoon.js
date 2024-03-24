import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cartoon = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cartoon_id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${cartoon_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch character');
        }
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCharacter();

    return () => {
      // Cleanup if needed
    };
  }, [cartoon_id]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h2 className="my-4">Character Detail</h2>
      {character && (
        <div className="row">
          <div className="col-md-6">
            <img src={character.image} alt={character.name} className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <h4>Episodes:</h4>
            <ul>
              {character.episode.map((episode, index) => (
                <li key={index}>
                  <a href={episode}>{episode}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartoon;
