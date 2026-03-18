import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page non trouvée</h1>
      <p>L'utilisateur demandé n'existe pas ou l'URL est incorrecte.</p>
      <Link to="/">Retour au dashboard</Link>
    </div>
  );
};

export default Error404;
