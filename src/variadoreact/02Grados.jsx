import { useRef } from 'react';

const Grados = () => {

    const gradesRef = useRef();
    const resultRef = useRef();

    const calculate = () => {
        const grades = gradesRef.current.value;
        const result = (grades * 9 / 5) + 32;
        resultRef.current.innerHTML = `${grades} C son ${result} F`;
    }


    return (
        <div>
            <input type="text" placeholder="Grados Centrigrados" />
            <button onClick={calculate}>Calcular</button>
            <p ref={resultRef}></p>
        </div>
    )
}

export default Grados
