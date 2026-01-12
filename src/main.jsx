import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './layout/Root';
import Login from './component/Login/Login';
import PlantDetailsPage from './component/Plant Details Page/PlantDetailsPage';
import SignUp from './component/SignUp/SignUp';
import Profile from './component/Profile/Profile';
import AuthProvider from './component/contexts/AuthContext/AuthProvider';
import Home from './component/Home/Home';
import PrivateRoute from './Routes/PrivateRoute';


const router = createBrowserRouter ([
  {
    path: '/', 
    Component: Root, 
    children: [
      {
        index: true, 
        Component: Home
      }, 
      {
        path: 'PlantDetailsPage', 
        element: <PrivateRoute>
          <PlantDetailsPage></PlantDetailsPage>
        </PrivateRoute>
      },
      {
        path: 'Login', 
        Component: Login
      },
      {
        path: 'SignUp', 
        Component: SignUp
      },
      {
        path: 'Profile', 
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
