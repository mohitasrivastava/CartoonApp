import { CharacterList } from './components/CharacterList';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

function Home() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );

        console.log(data, 'data');
        setCharacter(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query]);
  return (
    <>
      <div className="App">
        <div className="search">
          <input
            type="text"
            placeholder={'Search Character'}
            className={'input'}
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
        </div>

        {isLoading && <h2>Loading...</h2>}
        {query ? (
          <div className="results">
            {character.map((character) => (
              <div>
                <img src={character.image} alt={character.name} />
                {character.name}
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="bg-dark1 text-white1">
        <h1 className="text-center display-1 py-4">Rick And Morty</h1>

        <CharacterList />
      </div>
    </>
  );
}

export default Home;
