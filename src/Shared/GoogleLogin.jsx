import { useContext } from 'react';
import {} from 'react-icons/'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../pages/Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoogleLogin = () =>{
        console.log('ok');
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
            })
            .catch(error =>{
                console.log(error);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary w-full'>
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default GoogleLogin;