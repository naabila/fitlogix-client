import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/register",
        element: <Register />
      },
      {
        path:"/login",
        element:<Login />
      }
    ]
  },
]);
export default router;
