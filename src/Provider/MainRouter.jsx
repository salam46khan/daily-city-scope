import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddArticle from "../pages/AddArticle/AddArticle";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/LogIn/SignUp";
import Profile from "../pages/Profile/Profile";
import DetailsNews from "../Shared/DetailsNews";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-article',
                element: <PrivateRouter><AddArticle></AddArticle></PrivateRouter>
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
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/news/:id',
                element: <PrivateRouter><DetailsNews></DetailsNews></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default MainRouter;