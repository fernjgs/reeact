import { useRef } from 'react';

const App = () => {
    const anchoRef = useRef();
    const altoRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
        const anchoValue = anchoRef.current.value;
        const altoValue = altoRef.current.value;
        const r = anchoValue * altoValue;
        resultadoRef.current.innerHTML = r;
    }
    return <div>
        <input type="text" ref={anchoRef} />
        <input type="text" ref={altoRef} />
        <button onClick={calcular} >Enviar</button>
        <div ref={resultadoRef}></div>
    </div>
};

export default App;


// import { useState } from "react";

// const Dolares = () => {
//     const [v, setV] = useState(1);
//     const [v2, setV2] = useState(1)

//     const hacerCosas = () => {
//         setV(v + 1);
//     }

//     const hacerCosas2 = () => {
//         setV2(v2 + 1);
//     }
//     const result = 800 * v
//     return (
//         <div>
//             <button onClick={hacerCosas}>Pulsar</button>
//             <button onClick={hacerCosas2}>Pulsar</button>
//             {v}-{v2}
//         </div>
//     )
// }

// export default Dolares