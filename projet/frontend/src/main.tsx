import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './components/App';
import './styles/main.scss';

console.log(import.meta.env.VITE_API_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)