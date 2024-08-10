import { createBrowserRouter } from "react-router-dom";
import { Home } from "./view/app";
import { Login } from "./view/auth/Login";
import { Register } from "./view/auth/Register";
import { HomeLayout } from "./view/layout/HomeLayout";
import { GuestLayout } from "./view/layout/GuestLayout";



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },

  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },

  {
    path: '*',
    
  }

])

export default router