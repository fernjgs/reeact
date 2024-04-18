import { useState, useEffect } from "react";

const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results.slice(0, 10));
            })
    }, []);
    const definirImg = (id) => "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    return (
        <div>
            {characters.map((character, index) => (
                <div key={index}>
                    <p>{character.name}</p>
                    <img src={definirImg(index + 1)} alt={character.name} />
                </div>
            ))}
        </div>
    );
};

export default App;




// import { useState, useEffect } from "react";

// const App = () => {
//     const [characters, setCharacters] = useState([]);

//     // Función para obtener todos los personajes de la API
//     const fetchAllCharacters = (url, allCharacters = []) => {
//         return fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 const updatedCharacters = allCharacters.concat(data.results);
//                 if (data.next) {
//                     return fetchAllCharacters(data.next, updatedCharacters);
//                 }
//                 return updatedCharacters;
//             });
//     };

//     useEffect(() => {
//         fetchAllCharacters('https://swapi.dev/api/people/')
//             .then(allCharacters => {
//                 setCharacters(allCharacters);
//             })
//     }, []);

//     return (
//         <div>
//             {characters.map((character, index) => (
//                 <div key={index}>
//                     <p>{character.name}</p>
//                     <img src={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"} alt={character.name} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default App;

