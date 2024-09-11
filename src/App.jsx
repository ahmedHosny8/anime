/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import useAnimesContext from './hooks/use-animes-context';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <CreatePage />,
      },
      {
        path: '/edit',
        element: <EditPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  const { fetchAnimes } = useAnimesContext();

  useEffect(() => {
    fetchAnimes();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
