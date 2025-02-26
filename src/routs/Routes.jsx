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
import MemberRout from "../routs/MemberRout"
import TrainerRoute from "./TrainerRoute";
import BookedTrainerByMember from "../pages/Dashboard/member/BookedTrainerByMember";
import Payment from "../pages/payment/Payment";
import ForumDetails from "../pages/ForumDetails";
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
        path:"/booktrainer/:id",
        element:<PrivateRoute><BookedTrainer /></PrivateRoute>
      },
      {
        path: "/allclass",
        element: <AllClass />,
      },
      {
        path:"/forumdetails/:id",
        element:<ForumDetails />
      },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        path:'/payment',
        element:<PrivateRoute><Payment /></PrivateRoute>
      }
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
      {
        path: "/dashboard",
   element:<AdminRoute><AddForum /></AdminRoute>
      },
      //admin routes
      {
        path:'allsubscriber',
        element:<AdminRoute><AllSubscriber /></AdminRoute>
      },
     {
      path:'alltraineradmin',
      element:<AdminRoute><AllTrainerAdmin /></AdminRoute>
     },
      {
        index:true,
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
        element: <PrivateRoute><Balance /></PrivateRoute>,
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
        path:"addslot/:email",
        element:<TrainerRoute>
        <AddNewSlot />
        </TrainerRoute>
      },
      {
        path:"manageslots",
        element:<TrainerRoute><ManageSlots /></TrainerRoute>
      },

      {
        path:"addforum",
        element:<AddForum />
      },
      //member routes
      {
        path:"activity",
        element:<MemberRout>
          <PrivateRoute><ActivityLog /></PrivateRoute>
        </MemberRout>
      },
      {
        path:"profile",
        element:<MemberRout><Profile /></MemberRout>
      },
      
      {
        path:"bookedtrainerbymember",
        element:<MemberRout><BookedTrainerByMember /></MemberRout>
      },
    ],
  },
]);
export default router;
