const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const BACKEND_URL = isDev
  ? 'http://127.0.0.1:8000'  
  : 'https://flash2.book-plouc.fr'; 
  
window.BACKEND_URL = BACKEND_URL;