import React, { useState, useEffect } from "react";
import axios from "axios";

const MiComponente = () => {
    const [nombre, setNombre] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
            setNombre(response.data.name);
        };

        fetchData();
    }, []);

    return <div>Nombre del Pokémon: {nombre}</div>;
};

export default MiComponente;
