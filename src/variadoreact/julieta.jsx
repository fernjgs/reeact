import { useState } from 'react';
import { P } from './romeojul';
import lines from '../data/Obra.json';

const julieta = () => {
    const [currentParagraph, setCurrentParagraph] = useState(0)
    return (
        <div>
            <div>
                <button onClick={() => setCurrentParagraph(currentParagraph - 1)}>
                    Anterior
                </button>
                <button onClick={() => setCurrentParagraph(currentParagraph + 1)}>
                    Siguiente
                </button>

                <lines></lines>

            </div>
            {
                lines.map((line, index, i) => <P key={i} highlighting={index === currentParagraph}>{line}</P>)
            }
        </div >
    )
}

export default julieta