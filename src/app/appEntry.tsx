import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BaseLayout from './layouts/BaseLayout';
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </StrictMode>,
);
