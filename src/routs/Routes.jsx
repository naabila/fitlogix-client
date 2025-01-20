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

import AppliedTrainer from "../pages/Dashboard/admin/appliedTrainer/AppliedTrainer";
import Balance from "../pages/Dashboard/admin/Balance";
import AddClass from "../pages/Dashboard/admin/AddClass";
import ManageSlots from "../pages/Dashboard/trainer/ManageSlots";
import AddNewSlot from "../pages/Dashboard/trainer/AddNewSlot";
import AddForum from "../pages/Dashboard/trainer/AddForum";
import ActivityLog from "../pages/Dashboard/member/ActivityLog";
import Profile from "../pages/Dashboard/member/Profile";
import BookedTrainer from "../pages/Dashboard/member/BookedTrainer";
import AllSubscriber from "../pages/Dashboard/admin/AllSubscriber";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error";
import TrainerDetails from "../pages/Dashboard/admin/TrainerDetails";
import BeATrainer from "../pages/Dashboard/admin/BeATrainer";
import PrivateRoute from "./PrivateRoute";
import AppliedTrainerDetails from "../pages/Dashboard/admin/appliedTrainer/AppliedTrainerDetails";
import AllTrainerAdmin from "../pages/Dashboard/admin/appliedTrainer/AllTrainerAdmin";
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
        path:"/trainerdetails/:id",
        element:<TrainerDetails />
      },
      {
        path:"/betrainer",
        element:<PrivateRoute>
          <BeATrainer />
        </PrivateRoute>
      },
      {
        path:"/booktrainer",
        element:<PrivateRoute><BookedTrainer /></PrivateRoute>
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
    path:'*',
    element:<Error />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      //admin routes
      {
        path:'allsubscriber',
        element:<AdminRoute><AllSubscriber /></AdminRoute>
      },
     {
      path:'alltraineradmin',
      element:<AllTrainerAdmin />
     },
      {
        path: "alltrainer",
        element: <AdminRoute><AllTrainer /></AdminRoute>,
      },
      {
        path: "appliedtrainer",
        element: <AdminRoute><AppliedTrainer /></AdminRoute>,
      },
      {
        path: 'appliedtrainerdetailes/:id',
       
        element: <AdminRoute><AppliedTrainerDetails /></AdminRoute>,
      },
      {
        path: "balance",
        element: <AdminRoute><Balance /></AdminRoute>,
      },
      {
        path:"addclass",
        element:<AdminRoute><AddClass /></AdminRoute>
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
