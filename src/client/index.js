import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

import styles from './scss/application.scss';
import 'bootstrap';

render(
  <App />,
  document.getElementById('root')
);