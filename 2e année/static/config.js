// Détecte si on est en environnement de développement
const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Définit l'URL du backend en fonction de l'environnement
const BACKEND_URL = isDev
  ? 'http://127.0.0.1:8000'  // URL pour le développement
  : 'https://flash.book-plouc.fr';  // URL pour la production

// Attache la variable à l'objet global `window` pour qu'elle soit accessible partout
window.BACKEND_URL = BACKEND_URL;