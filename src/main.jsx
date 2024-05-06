import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import data from './data.json';
import { ThemeProvider } from './ThemeContext';
const countries = data;
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeProvider>
        <App countries={countries} />
      </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
);
