import * as React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <NavBar/>
      <Outlet />
    </div>
  );
}

export default App;