import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddArticle from "../pages/AddArticle/AddArticle";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/LogIn/SignUp";
import Profile from "../pages/Profile/Profile";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-article',
                element: <AddArticle></AddArticle>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])

export default MainRouter;