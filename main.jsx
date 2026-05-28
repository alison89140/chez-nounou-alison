import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const recettes = ["Banana Bread", "Pancakes", "Cookies", "Brownies"];
const activites = ["Pâte à modeler maison", "Sable magique", "Pâte à sel", "Bulles colorées"];

function App() {
  return (
    <main>
      <section className="hero-faithful">
        <div className="topbar">
          <div className="logo">
            <span>Chez</span>
            <strong>Nounou Alison</strong>
          </div>
          <nav>
            <a href="#recettes">Recettes</a>
            <a href="#activites">Activités</a>
            <a href="#livret">Livret d’accueil</a>
            <a href="#apropos">À propos</a>
          </nav>
        </div>

        <div className="intro-grid">
          <div className="intro-text">
            <p className="script">Bienvenue</p>
            <h1>Chez Nounou Alison</h1>
            <div className="separator">❤</div>
            <p>
              Ici, je partage avec vous des recettes gourmandes, des activités
              ludiques et créatives, ainsi que des idées du quotidien à réaliser
              avec les enfants.
            </p>
            <p className="script small">
              De quoi s’inspirer et passer de jolis moments ensemble en famille !
            </p>
          </div>
          <div className="image-card">
            <img src="/assets/accueil-canva.jpeg" alt="Aperçu de l’univers Chez Nounou Alison" />
          </div>
        </div>
      </section>

      <section className="canva-preview">
        <h2>La page d’accueil validée</h2>
        <p>Cette version reprend le visuel préparé ensemble comme vraie base graphique.</p>
        <img src="/assets/accueil-canva.jpeg" alt="Page d’accueil Chez Nounou Alison" />
      </section>

      <section id="recettes" className="cards-section">
        <h2>Recettes gourmandes</h2>
        <div className="cards">
          {recettes.map((r) => (
            <article className="mini-card" key={r}>
              <div className="thumb">🍰</div>
              <h3>{r}</h3>
              <button>Voir la fiche ❤</button>
            </article>
          ))}
        </div>
      </section>

      <section id="activites" className="cards-section green">
        <h2>Activités ludiques & créatives</h2>
        <div className="cards">
          {activites.map((a) => (
            <article className="mini-card" key={a}>
              <div className="thumb">🎨</div>
              <h3>{a}</h3>
              <button>Voir la fiche ❤</button>
            </article>
          ))}
        </div>
      </section>

      <section className="bottom-grid">
        <article id="livret" className="info-card">
          <h2>Livret d’accueil ❤</h2>
          <p>Découvrez toutes les informations essentielles sur mon fonctionnement, mes valeurs et le quotidien de votre enfant.</p>
          <button>Consulter le livret ❤</button>
        </article>
        <article id="apropos" className="info-card blush">
          <h2>À propos ❤</h2>
          <p>Ce site est né de mon envie de partager des idées simples et sincères, issues de mon quotidien avec les enfants.</p>
          <button>En savoir plus ❤</button>
        </article>
      </section>

      <footer>
        <p className="script">Une question, une idée, un besoin particulier ?</p>
        <button>Me contacter ❤</button>
        <small>© Chez Nounou Alison — Tous droits réservés</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
