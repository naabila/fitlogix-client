import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import DashboardLayout from "../mainLayout/DashboardLayout";
import AllTrainer from "../pages/Dashboard/admin/AllTrainer";
import AllClass from "../pages/Dashboard/admin/AllClass";
import Forum from "../pages/Forum/Forum";
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
        path:'/alltrainer',
        element:<AllTrainer />
      },
      {
        path:'/allclass',
        element:<AllClass />
      },
      
      {
        path:"/forum",
        element:<Forum />
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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    
  }
]);
export default router;
