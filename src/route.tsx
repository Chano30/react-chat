import { createBrowserRouter } from "react-router-dom";
import { Home } from "./view/app";
import { Login } from "./view/auth/Login";
import { Register } from "./view/auth/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export default router