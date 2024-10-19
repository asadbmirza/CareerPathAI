import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App.jsx'
import Register from "./pages/Register.jsx"
import Login from './pages/Login.jsx'
import Details from './pages/Details.jsx'
import Mainpage from './pages/Mainpage.jsx'
import ProtectedPage from './pages/ProtectedPage.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />
  },
  
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <ProtectedPage />,
    children: [
      {
        path: "/details",
        element: <Details />
      }, 
      {
        path: "/dashboard",
        element: <Mainpage />
      }
    ]
  },
  {
    path: "/details",
    element: <Details />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
