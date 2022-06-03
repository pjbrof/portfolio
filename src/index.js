import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import { store } from './store';

const app = document.getElementById('app');
const root = createRoot(app);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
