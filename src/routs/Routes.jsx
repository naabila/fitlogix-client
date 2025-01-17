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
import AllUsers from "../pages/Dashboard/admin/AllUsers";
import AppliedTrainer from "../pages/Dashboard/admin/AppliedTrainer";
import Balance from "../pages/Dashboard/admin/Balance";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddClass from "../pages/Dashboard/admin/AddClass";
import ManageSlots from "../pages/Dashboard/trainer/ManageSlots";
import AddNewSlot from "../pages/Dashboard/trainer/AddNewSlot";
import AddForum from "../pages/Dashboard/trainer/AddForum";
import ActivityLog from "../pages/Dashboard/member/ActivityLog";
import Profile from "../pages/Dashboard/member/Profile";
import BookedTrainer from "../pages/Dashboard/member/BookedTrainer";
import AllSubscriber from "../pages/Dashboard/admin/AllSubscriber";
import AdminRoute from "./AdminRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltrainer",
        element: <AllTrainer />,
      },
      {
        path: "/allclass",
        element: <AllClass />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      //admin routes
      {
        path:'allsubscriber',
        element:<AdminRoute><AllSubscriber /></AdminRoute>
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
      {
        path: "alltrainer",
        element: <AllTrainer />,
      },
      {
        path: "appliedtrainer",
        element: <AppliedTrainer />,
      },
      {
        path: "balance",
        element: <Balance />,
      },
      {
        path:"addclass",
        element:<AddClass />
      },
      {
        path:'forum',
        element:<Forum />
      },
      //trainer route
      {
        path:"manageslots",
        element:<ManageSlots />
      },

      {
        path:"addslot",
        element:<AddNewSlot />
      },
      {
        path:"addforum",
        element:<AddForum />
      },
      //member routes
      {
        path:"activity",
        element:<ActivityLog />
      },
      {
        path:"profile",
        element:<Profile />
      },
      
      {
        path:"bookedtrainer",
        element:<BookedTrainer />
      },
    ],
  },
]);
export default router;
