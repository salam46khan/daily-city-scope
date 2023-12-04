import PropTypes from 'prop-types';
import useIdentity from '../hook/useIdentity';
import { Navigate } from 'react-router-dom';
const AdminRouter = ({children}) => {
    const [identity] = useIdentity()
    // console.log(identity.role);
    if(identity[0]?.role === 'admin'){
        return children
    }
    return <Navigate to={'/'}></Navigate>
};
AdminRouter.propTypes = {
    children: PropTypes.object
}
export default AdminRouter;