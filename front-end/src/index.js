import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    <App />
  </BrowserRouter>
);