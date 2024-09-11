import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AnimesProvider } from './context/animes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimesProvider>
      <App />
    </AnimesProvider>
  </StrictMode>
);
