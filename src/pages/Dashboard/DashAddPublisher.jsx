import { FaFileUpload } from 'react-icons/fa';
import Swal from 'sweetalert2'

const imgHostingKey = import.meta.env.VITE_imgHostingKey;
const imgHostingAPI = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`
// import './DashPubslisher.css'
import { useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import usePublisher from '../../hook/usePublisher';


const DashAddPublisher = () => {
    const axiosPublic = useAxiosPublic()
    const [publishers, refetch] = usePublisher()

    const [uploadImg, setUploadImg] = useState('')
    const handleImageChange = async (event) => {
        const imgPath = event.target.files[0]
        console.log(imgPath);

        const formData = new FormData();
        formData.append('image', imgPath);

        const res = await axiosPublic.post(imgHostingAPI, formData)
        const imgUrl = res.data.data.url;
        console.log(imgUrl);
        setUploadImg(imgUrl)
    }


    const handlePublisherUpload = event => {
        event.preventDefault()
        const form = event.target;
        const PublisherName = form.name.value;
        const PublisherLogo = uploadImg;
        const publisher = { PublisherName, PublisherLogo }
        console.log(publisher);

        axiosPublic.post('/publisher', publisher)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged) {
                    Swal.fire({

                        icon: "success",
                        title: "Your News Post successfuly",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                    refetch()
                }
            })
    }
    return (
        <div>
            <h2 className='text-3xl'>Add Publisher</h2>
            <hr />
            <p className="text-xl">Total Publisher: {publishers.length}</p>
            <div className="p-3 flex flex-col md:flex-row justify-between items-start gap-5">
                <div className="min-w-max w-full ">
                    <div className='bg-base-200 p-5'>
                        <form onSubmit={handlePublisherUpload} className='text-center space-y-4'>
                            <div>
                                <h2 className='text-3xl'>Upload Publisher</h2>
                            </div>
                            <div className='form-control  flex  h-40 justify-center  items-center'>
                                <label className="p-5 h-full overflow-hidden border flex items-center border-black">
                                    <input className='hidden' type="file" onChange={handleImageChange} required />
                                    {
                                        uploadImg ? <img className='h-full' src={uploadImg} alt="" /> : <FaFileUpload className='text-8xl'></FaFileUpload>
                                    }
                                    {/* <FaFileUpload className='text-8xl'></FaFileUpload> */}
                                </label>
                            </div>

                            <div className="form-control">
                                <input type="text" name='name' placeholder="Publisher Name" className="input text-center input-bordered border-black" required />
                            </div>
                            <div className='form-control'>
                                <input className='btn w-full btn-outline' type="submit" value="Upload" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="border w-full min-w-max">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Logo</th>
                                    <th>Publisher</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    publishers.map((item, index) => <tr key={item._id}>
                                        <th>{index+1}.</th>
                                        <td>
                                            <img className='h-12 w-12' src={item.PublisherLogo} alt="" />
                                        </td>
                                        <td>{item.PublisherName}</td>
                                    </tr>)
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashAddPublisher;