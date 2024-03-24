// // import { Link } from 'react-router-dom';
// import { useNavigate, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// export function Character(character) {
//   //   const navigate = useNavigate();
//   const [image, setImage] = useState();
//   function clickhandler(character) {
//     console.log(character, 'cgsdfghj');
//   }
//   return (
//     <div className="text-center p-5">
//       <h3>{character.name}</h3>
//       <img
//         src={character.image}
//         alt={character.name}
//         className="img-fluid rounded-pill"
//       />
//       <p>{`Origin: ${character.origin && character.origin.name}`}</p>

//       {/* <Link to={character.url}> hiii</Link> */}
//       {/* <button onClick={setImage(character.name)}>Click</button> */}
//       {/* {character.episode.map((e) => console.log(e, 'e'))} */}
//       {/* <button onClick={clickHandler()}></button> */}
//       {/* <img src={character.episode} alt=" episode"></img> */}
//     </div>
//   );
// }
// export default Character;

// import { Link } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export function Character(character) {
  //   const navigate = useNavigate();
  const [image, setImage] = useState();
  function clickhandler(character) {
    console.log(character, 'cgsdfghj');
  }
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

          {/* <Link to={character.url}> hiii</Link> */}
          {/* <button onClick={setImage(character.name)}>Click</button> */}
          {/* {character.episode.map((e) => console.log(e, 'e'))} */}
          {/* <button onClick={}></button> */}
          {/* <img src={character.episode} alt=" episode"></img> */}
        </Link>
      </div>
    </div>
  );
}
export default Character;
