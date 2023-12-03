import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from 'sweetalert2'

const UploadMyArticle = () => {
    const newsData = useLoaderData();
    const axiosSecure = useAxiosSecure()
    const { _id, title, category, location, description, isPrimium } = newsData;
    const handleUpdateNews = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value
        const category = form.category.value
        const location = form.location.value
        const description = form.description.value
        const isPrimium = form.primium.checked
        const updateValue = { title, category, location, description , isPrimium}
        console.log(updateValue);

        axiosSecure.put(`/news/${_id}`, updateValue)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    icon: "success",
                    title: "Your news Update successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="container mx-auto">
            <div>
                <form className='card-body' onSubmit={handleUpdateNews}>

                    <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name='title' type="text" defaultValue={title} className="input input-bordered" required />
                        </div>
                        <div className=''>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                                <label className="label cursor-pointer border p-3 rounded-lg h-full">
                                    <span className="label-text">Is Primium:</span>
                                    <input name='primium' type="checkbox" className="toggle"  defaultChecked={isPrimium}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:gap-4 md:grid-cols-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='location' type="text" defaultValue={location} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Choose Category</span>
                            </label>
                            <select className="h-full p-3 rounded-md" defaultValue={category} name="category">
                                <option value="Sports">Sports</option>

                                <option value="Politice">Politice</option>

                                <option value="Wrold">Wrold</option>
                                <option value="Economy">Economy</option>
                                <option value="Entertentment">Entertentment</option>
                                <option value='Education'>Education</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' type="text" placeholder="description"
                                defaultValue={description} className="textarea textarea-bordered" required />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        {/* <div className='form-control border'>

                                <input type="file" className="file-input file-input-bordered w-full h-full" name='photo' />
                            </div> */}
                        {/* <div className='border p-1 rounded'>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Is Primium:</span>
                                    <input name='primium' type="checkbox" className="toggle" defaultValue={isPrimium} />
                                </label>
                            </div>
                        </div> */}
                    </div>
                    <div className='text-center'>
                        <input className='text-center btn btn-primary' type="submit" value="Post" />
                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
};

export default UploadMyArticle;