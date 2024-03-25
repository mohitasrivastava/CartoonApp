import { useState, useEffect } from 'react';
import { Character } from './Character';

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      {/* <p>Page: {page}</p> */}

      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page - 1)}
      >
        Page {page}
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const { results } = await data.json();
        console.log(results, 'result');
        setCharacters(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <Character
              key={character.id}
              id={character.id}
              name={character.name}
              origin={character.origin}
              image={character.image}
              // episode={character.episode.map((e) => {
              //   setEpisode(e);
              //   console.log(e, 'e');
              // })}
              url={character.url}
            />
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
