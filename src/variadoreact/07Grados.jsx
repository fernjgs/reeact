import { useState } from 'react';

const Gradosconv = () => {

    const [fahrenheit, setFarenheit] = useState(0)

    const calculate = e => {
        const gradesValue = e.target.value;
        const fahrenheitValue = gradesValue * 9 / 5 + 32;
        setFarenheit(fahrenheitValue);

        // resultRef.current.innerHTML = `${grades} C son ${result} F`;
    }


    return (
        <div>
            <input type="text" onChange={calculate} />
            {fahrenheit}
        </div>
    )
}

export default Gradosconv
