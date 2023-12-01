import { useContext } from 'react';
import {} from 'react-icons/'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../pages/Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hook/useAxiosPublic';
const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () =>{
        console.log('ok');
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res =>{
                        console.log(res.data);
                    })
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