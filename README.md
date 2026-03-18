# SportSee

SportSee est une application de tableau de bord d'analytics de coaching sportif. Ce projet a été développé avec React, Vite et Recharts.

## Prérequis

- [NodeJS](https://nodejs.org/en/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) ou yarn

## Installation

1. Cloner le repository frontend (ce projet)
2. Installer les dépendances : `npm install`
3. Démarrer le serveur de développement : `npm run dev`
4. L'application sera accessible (généralement sur http://localhost:5173/) et redirigera vers `/user/12`

## Backend

L'application nécessite un backend pour fonctionner avec de vraies données.
Allez dans le dossier `SportSee` (backend fourni), installez les dépendances (`npm install`) puis démarrez-le (`npm run dev`).
Il tournera sur le port 3000 par défaut.

## Fonctionnement des Mocks

Afin de faciliter le développement ou de palier au manque du backend, le projet intègre un mode "mocké".
Pour activer ou désactiver ce mode, allez dans le fichier de service (`src/services/api.js`) et modifiez la constante :

```javascript
const USE_MOCK_DATA = true; // Passez à false pour utiliser la vraie API Node
```

## Technologies utilisées
- React 18
- React Router DOM
- Recharts (pour les graphiques d'activité, sessions, performances et score)
- CSS natif pour le stylisme
