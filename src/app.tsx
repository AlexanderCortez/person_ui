import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import routes from '@constants/routes';
import AppLayout from 'components/app-layout';
import People from 'pages/people';

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
        element: <People />,
      },
      {
        path: routes.people,
        element: <People />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
