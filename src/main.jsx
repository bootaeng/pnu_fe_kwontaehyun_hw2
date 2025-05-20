import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

import { SelectedPokemonProvider } from './context/pokeCont';
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <SelectedPokemonProvider>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </SelectedPokemonProvider>
  </React.StrictMode>
);