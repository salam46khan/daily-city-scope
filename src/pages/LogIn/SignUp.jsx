import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import GoogleLogin from "../../Shared/GoogleLogin";
// import axios from 'axios';
// import useAxiosPublic from "../../hook/useAxiosPublic";

// const imgHostingKey = import.meta.env.VITE_imgHostingKey;
// const imgHostingAPI = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`


const SignUp = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    // const axiosPublic = useAxiosPublic()
    const { createUser } = useContext(AuthContext)

    console.log(createUser);
    const handleSignUp = async (event) => {
        event.preventDefault()
        // console.log(event.target);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.files[0]

        const user = { name, email, password }
        console.log(user);
        if (!/[$#@%&*]/.test(password)) {
            setError('Password should be a spacial character')
            return
        }
        if (password.length < 6) {
            setError('Password should be six character')
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password should be one upper case letter')
            return
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    // photoURL: imgURL
                })
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="min-h-screen bg-base-300">
                <div className="container mx-auto py-10">
                    <div className="bg-base-100 shadow-md rounded-md mx-auto py-10 px-2 max-w-sm">
                        <h2 className="text-center font-logoTitle text-2xl">Sign Up</h2>

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Picture</span>
                                </label>
                                <input type="file" className="file-input file-input-bordered w-full"/>
                            </div> */}
                            <div className="text-red-400">
                                
                                <p>{error ? error : ''}</p>
                            </div>
                            <div className="form-control mt-4">

                                <input className="btn btn-primary" type="submit" value="Sign up" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className="px-8">
                            <GoogleLogin></GoogleLogin>

                        </div>
                        <div className="text-center mt-4">
                            <p>Have an account? <Link className="text-blue-500" to={'/login'}>Log In</Link> please</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;