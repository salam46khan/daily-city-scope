import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { FaUserAlt } from "react-icons/fa";
import useIdentity from "../../hook/useIdentity";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAxiosPublic from "../../hook/useAxiosPublic";
const imgHostingKey = import.meta.env.VITE_imgHostingKey;
const imgHostingAPI = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [identity, refetch] = useIdentity()
    const profile = identity[0]
    // console.log(identity);
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const [uploadImg, setUploadImg] = useState(profile.photoURL)
    const handleImageChange = async (event) =>{
        const imgPath = event.target.files[0]
        console.log(imgPath);

        const formData = new FormData();
        formData.append('image', imgPath);

        const res = await axiosPublic.post(imgHostingAPI, formData)
        const imgUrl = res.data.data.url;
        console.log(imgUrl);
        setUploadImg(imgUrl)
    }

    const handleProfileUpdate = event =>{
        event.preventDefault()
        const from = event.target;
        const phone = from.phone.value;
        const bath = from.bath.value;
        const address = from.address.value;
        const gender = from.gender.value;
        const photoURL = uploadImg

        const profileUpdate = {phone, bath, address, gender, photoURL}
        console.log(profileUpdate);

        axiosSecure.patch(`/users/${profile._id}`, profileUpdate)
        .then(res => {
            console.log(res.data);
            refetch()
        })

    }

    return (
        <div>
            <div className="container mx-auto px-3 py-5 flex flex-col md:flex-row">
                <div className="min-w-[260px] p-3 py-10 bg-base-300">
                    <div className=" text-center">
                        {
                            profile?.photoURL ? <img className="h-28 w-28 rounded-full mx-auto mb-4" src={profile?.photoURL} alt="" /> : <div>
                                {
                                    user.photoURL ? <img className="h-28 w-28 rounded-full mx-auto mb-4" src={user?.photoURL} alt="" /> : <FaUserAlt className="mx-auto text-5xl"></FaUserAlt>
                                }

                            </div>
                        }

                        <h3 className="font-newsTitle text-2xl">{identity[0]?.name}</h3>
                        <p className="inline-block bg-slate-500 py-2 px-8 text-white mt-1 uppercase">{profile?.role ? profile.role : 'User'}</p>
                    </div>
                    <div className="pt-4">
                        <p>Email: {profile?.email}</p>
                        <p>Name: {profile?.name}</p>
                        <p>Phone: {profile?.phone}</p>
                        <p>Date of Bath: {profile?.bath}</p>
                        <p>Gender: {profile?.gender}</p>
                        <p>Address: {profile?.address}</p>
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
                        <form onSubmit={handleProfileUpdate} className='card-body'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone:</span>
                                    </label>
                                    <input name='phone' type="text" placeholder="phone" className="input input-bordered" defaultValue={profile?.phone}/>
                                </div>
                                <div className="form-control">
                                    <div className='form-control'>
                                        <label className="label">
                                            <span className="label-text">Date of Bath:</span>
                                        </label>
                                        <input type="date" className="file-input file-input-bordered p-3 w-full h-full" name='bath' defaultValue={profile?.bath} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address:</span>
                                </label>
                                <input name='address' type="text" placeholder="Address" className="input input-bordered" defaultValue={profile?.address}/>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                                <div>
                                    <div className='form-control h-full'>

                                        <input type="file" className="file-input file-input-bordered w-full h-full" onChange={handleImageChange} />
                                    </div>
                                </div>
                                <div className="flex border bg-black rounded-lg overflow-hidden">
                                    <label className="label ">
                                        <span className="label-text text-base-300 px-3 uppercase text-bold font-extralight">Gender:</span>
                                    </label>
                                    <select className="h-full w-full p-3 " name="gender">
                                        <option value="male">Male</option>

                                        <option value="female">Female</option>

                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center mt-3">
                            <input className="btn btn-primary" type="submit" value="Update" />
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;