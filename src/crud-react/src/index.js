import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Context/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './Pages/Cadastro/Cadastro';
import Home from './Pages/Home/Home';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home/>},
      {path: "/cadastro", element: <Cadastro/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
