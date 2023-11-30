import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Header/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
    const location = useLocation()
    // console.log(location);
    const noHeader = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div >
            {noHeader || <Navbar></Navbar>}
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {noHeader || <Footer></Footer>}
        </div>
    );
};

export default Root;