import { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import { RingLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation()
    if (loader) {
        return <>
            <div className="sweet-loading w-full h-52 flex justify-center items-center">
                
            <RingLoader color="#000" />
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};
PrivateRouter.propTypes = {
    children: PropTypes.object
}
export default PrivateRouter;