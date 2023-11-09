import { useContext } from 'react';
import './Home.css';
import { ThemeContext } from '../../Context/ThemeContext';

const Home = ()=> {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return(
        <div className="home">
            <h1>Home</h1>
            <button onClick={toggleTheme}>Mudar tema</button>
            <p>O tema atual é: {theme}</p>
        </div>
    )
};


export default Home