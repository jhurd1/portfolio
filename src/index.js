import React from 'react';
import ReactDOM from 'react-dom/client';
import './SCSS/index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

//Index.js constitutes what jsx folk refer to as 'main.jsx'.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
