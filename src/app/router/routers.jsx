import { createBrowserRouter } from 'react-router';
import HomePage from '../features/homepage';
import App from '../layout/App.jsx';
import Details from '../features/detail.jsx';
import Login from '../features/login.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'films', element: <HomePage /> },
      { path: 'films/:id', element: <Details /> },
      { path: 'login', element: <Login /> },
    ],
  },
]);
