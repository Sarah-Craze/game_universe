import React from 'react';
import { Link } from 'react-router-dom'; // Importez le composant Link pour créer des liens

const Home = () => (
  <div>
    <h1>Page d'accueil</h1>
    <p>Bienvenue sur la page d'accueil de mon site !</p>
    {/* Ajoutez un lien vers la liste des jeux */}
    <Link to="/page-list">Voir la liste des jeux</Link>
  </div>
);

export default Home;
