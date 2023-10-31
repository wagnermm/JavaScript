import * as React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Cadastro from './components/cadastro/Cadastro';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <div className='logo'>
            <img alt='logo'/>
          </div>
          <nav className='nav'>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cadastro">Cadastro</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cadastro' element={<Cadastro/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;