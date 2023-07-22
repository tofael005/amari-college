import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import College from "../Pages/College";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import About from "../Pages/About";
import LogIn from "../log/LogIn"
import Register from "../log/Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/college",
                element: <College />
            },
            {
                path: "/admission",
                element: <Admission />
            },
            {
                path: "/myCollege",
                element: <MyCollege />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])
export default router;