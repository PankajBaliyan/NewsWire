import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './routes';

//! import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRoute />
  </React.StrictMode>
);