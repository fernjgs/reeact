import america from '../media/audio/america.mp3'
import superheroe from '../media/audio/superheroe.mp3';
import pajaros from '../media/audio/pajaros.mp3';
import americaIMG from '../media/img/america.png';
import heroeIMG from '../media/img/heroe.png';
import birdsIMG from '../media/img/birds.png';


const questions = [
    {
        "question": "¿Quien descubrió América?",
        "img": americaIMG,
        "audio": america,
        "answers": [{ "txt": "Colón", "isRight": true },
        { "txt": "El Fari", "isRight": false },
        { "txt": "Yo mismo", "isRight": false },
        { "txt": "Tú", "isRight": false }
        ]
    },
    {
        "question": "¿Quién es el mayor superheroe de todos los tiempos?",
        "img": heroeIMG,
        "audio": superheroe,
        "answers": [
            { "txt": "Spiderman", "isRight": true },
            { "txt": "Batman", "isRight": false },
            { "txt": "Yo mismo", "isRight": false },
            { "txt": "tú mismo", "isRight": false }
        ]
    },
    {
        "question": "¿Por qué lo pájaros pían?",
        "img": birdsIMG,
        "audio": pajaros,
        "answers": [
            { "txt": "Tienen hambre", "isRight": true },
            { "txt": "Tienen frío", "isRight": false },
            { "txt": "Están contentos", "isRight": false },
            { "txt": "Están tristes", "isRight": false }
        ]
    }
];

export default questions;