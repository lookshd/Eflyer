import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ProductsProvider} from "./context/products-context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsProvider> <App /></ProductsProvider> 
     
    
  </React.StrictMode>
);

reportWebVitals();
