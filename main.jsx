import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="site">
      <section className="canvaHome" aria-label="Page d'accueil Chez Nounou Alison">
        <img src="/accueil-canva.jpeg" alt="Page d'accueil Chez Nounou Alison" />
        <a className="hotspot recettes" href="#recettes" aria-label="Aller aux recettes" />
        <a className="hotspot activites" href="#activites" aria-label="Aller aux activités" />
        <a className="hotspot livret" href="#livret" aria-label="Aller au livret d’accueil" />
        <a className="hotspot apropos" href="#apropos" aria-label="Aller à la page à propos" />
      </section>

      <section id="recettes" className="section recettesSection">
        <h2>Recettes gourmandes</h2>
        <p>Cette section accueillera les fiches recettes avec aperçu et bouton de téléchargement.</p>
      </section>

      <section id="activites" className="section activitesSection">
        <h2>Activités ludiques & créatives</h2>
        <p>Cette section accueillera les fiches activités avec aperçu et bouton de téléchargement.</p>
      </section>

      <section id="livret" className="section livretSection">
        <h2>Livret d’accueil</h2>
        <p>Le livret pourra être consulté ou téléchargé ici.</p>
      </section>

      <section id="apropos" className="section aproposSection">
        <h2>À propos</h2>
        <p>Un espace de présentation doux et cohérent avec ton univers.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
