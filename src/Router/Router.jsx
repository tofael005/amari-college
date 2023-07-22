import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import College from "../Pages/College";
import Admission from "../Pages/Admission";
import MyCollege from "../Pages/MyCollege";
import About from "../Pages/About";
import LogIn from "../log/LogIn"
import Register from "../log/Register"
import Science from "../Pages/Blog/Science";
import ArtDrawing from "../Pages/Blog/ArtDrawing";
import Business from "../Pages/Blog/Business";
import Language from "../Pages/Blog/Language";
import BasicScience from "../Pages/Blog/BasicScience";

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
            },
            {
                path: "/science",
                element: <Science />
            },
            {
                path: "/art",
                element: <ArtDrawing />
            },
            {
                path: "/business",
                element: <Business />
            },
            {
                path: "/language",
                element: <Language />
            },
            {
                path: "/basic-science",
                element: <BasicScience />
            },
            {
                path: "/law",
                element: <Law />
            }
        ]
    }
])
export default router;