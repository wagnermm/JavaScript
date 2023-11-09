import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ()=> {
    return(
        <nav className='navbar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cadastro">Cadastro</Link></li>
            </ul>
        </nav>
    )
};

export default NavBar