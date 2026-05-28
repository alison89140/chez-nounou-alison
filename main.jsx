import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="site">
      <img className="home-visual" src="/accueil-canva.png" alt="Page d’accueil Chez Nounou Alison" />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
