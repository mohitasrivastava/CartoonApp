import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export function Character(character) {
  //   const navigate = useNavigate();

  return (
    <div className="col-md-4 p-4" key={character.id}>
      <div className="text-center p-5 card">
        <Link to={`/cartoon/${character.id}`}>
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded-pill"
          />

          <div className="card-body">
            <h3 className="card-title">{character.name}</h3>
            <p className="card-text">{`Origin: ${
              character.origin && character.origin.name
            }`}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Character;
