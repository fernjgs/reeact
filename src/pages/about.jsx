import { Link } from 'react-router-dom';

const About = () => (
    <div>
        <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/about">Contact</Link></li>
            <li><Link to="/ajksdfkjhasdk">Error en la url</Link></li>
        </ul>

        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, similique.</h2>

    </div>
)

export default About;