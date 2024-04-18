import { useRef } from 'react';
// import React from 'react'

const Dolares = () => {

    const eurosRef = useRef(null);
    const dolar = useRef(null);

    const calculate = () => {
        const euros = eurosRef.current.value;
        dolar.current.innerHTML = euros * 1.53;
    }

    return (
        <div>
            <input type="text" ref={eurosRef} />
            <button onClick={calculate}>Calcular</button>
            <p ref={dolar}></p>
        </div>
    )
}

export default Dolares
