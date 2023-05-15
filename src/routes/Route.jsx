import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Checkout from "../pages/Checkout/Checkout";
import CartDetails from "../pages/CartDetails/CartDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element: <SingUp></SingUp>
        },
        {
          path: 'chackout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-orcin.vercel.app/services/${params.id}`)
        },
        {
          path: 'cart-details',
          element: <PrivateRoute><CartDetails></CartDetails></PrivateRoute>
        }
      ]
    },
  ]);

  export default router