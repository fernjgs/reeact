import { useRef, useState } from 'react';

const Areatri = () => {
    const ancho = useRef();
    const alto = useRef();
    const [area, setArea] = useState(0);

    const calcular = () => {
        const anchoValue = ancho.current.value;
        const altoValue = alto.current.value;
        const r = anchoValue * altoValue;
        setArea(r);
    }
    return <div>
        <input type="text" ref={ancho} />
        <input type="text" ref={alto} />
        <button onClick={calcular}>Enviar</button>
        <p>{area}</p>
    </div>
};

export default Areatri;


