import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/router/routers';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './app/store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
