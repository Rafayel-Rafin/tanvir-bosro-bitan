import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Main from './Home/Main/Main.jsx';
import Hooks from './hooks/Hooks.jsx';
import Login from './Home/Login/Login.jsx';
import AuthProvider from './providers/authprovider.jsx';
import SignUp from './Home/Login/signUp/signUp.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
// import AdminRoute from './PrivateRoute/AdminRoute.jsx';
import NotFound from './components/NotFound.jsx'; // Optional: Create a NotFound component
import DetailsClient from './components/DetailsClient/DetailsClient.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: (
          <Hooks />
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: '/signup',
  //   element: <SignUp />,
  // },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/client/:id', // Catch-all for undefined routes
    element: <DetailsClient />,
    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
  },
  {
    path: '*', // Catch-all for undefined routes
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
