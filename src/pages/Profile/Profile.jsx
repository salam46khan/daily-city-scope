import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../../hook/useAxiosSecure";
// import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
// import useIdentity from "../../hook/useIdentity";

const Profile = () => {
    const { user } = useContext(AuthContext)
    // const[ identity ]= useIdentity()
    // console.log(identity);
    // const {email} = user
    // console.log(user);
    const [users, setUsers] = useState([])
    const axiosSecure = useAxiosSecure()
    const url = `/user?email=${user.email}`
    useEffect(()=>{
        axiosSecure.get(url)
            .then(res => {
                // console.log(res.data[0]);
                setUsers(res.data[0])
            })
    },[axiosSecure, url])
    
    return (
        <div>
            <div className="container mx-auto px-3 py-5 flex flex-col md:flex-row">
                <div className="min-w-[260px] p-3 py-10 bg-base-300">
                    <div className=" text-center">
                        {
                            users.photoURL ? <img className="h-28 w-28 rounded-full mx-auto mb-4" src={users?.photoURL} alt="" /> : <div>
                                {
                                    user.photoURL ? <img className="h-28 w-28 rounded-full mx-auto mb-4" src={user?.photoURL} alt="" /> : <FaUserAlt className="mx-auto"></FaUserAlt>
                                }
                                
                            </div>
                        }
                        
                        <h3 className="font-newsTitle text-2xl">{users.name}</h3>
                        <p className="inline-block bg-slate-500 py-2 px-8 text-white mt-1">Role</p>
                    </div>
                    <div className="pt-4">
                        <p>Email: {users.email}</p>
                        <p>Name: {users.name}</p>
                        <p>Phone: </p>
                        <p>Date of Bath: </p>
                        <p>Gender: </p>
                        <p>Address: </p>
                    </div>
                </div>
                <div className="bg-base-200 flex-1 p-5">
                    <div className="text-center mb-3">
                        <h2 className="text-3xl">PROFILE</h2>
                    </div>
                    <div className="bg-base-100 rounded-md p-5">
                        <div className="divider divider-start">
                            <h2 className="font-newsTitle text-2xl">Update Profile</h2>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;