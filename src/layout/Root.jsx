import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Header/Navbar";

const Root = () => {
    const location = useLocation()
    // console.log(location);
    const noHeader = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div >
            {noHeader || <Navbar></Navbar>}
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;