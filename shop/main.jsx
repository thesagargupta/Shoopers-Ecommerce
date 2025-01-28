import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './src/App.jsx';
import ShopContextProvider from './src/context/ShopContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
