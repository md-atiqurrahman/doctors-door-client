import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment";
import Reviews from "../../Pages/Reviews/Reviews";
import ContactUs from "../../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
