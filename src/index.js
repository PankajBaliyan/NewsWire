import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './routes';
import ReduxStore from './store';
import { Provider } from 'react-redux';

//! import Bootstrap & CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AppRoute />
    </Provider>
  </React.StrictMode>
);