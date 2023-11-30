import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import routes from '@constants/routes';
import AppLayout from 'components/app-layout';
import Home from 'pages/home';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
