import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    return (
        <div>
            <h1>Layout</h1>
            <nav>
                <ul>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/page2" >Contact</Link></li>
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout;