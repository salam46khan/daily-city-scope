import Toggle from 'react-toggle';
import ad1 from '../../assets/ad-report.gif'
import ad2 from '../../assets/job circular.gif'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
// var Toggle = require('react-toggle')
const AddArticle = () => {
    const date = new Date()
    const {user} = useContext(AuthContext)
    const author = user.displayName;
    const handlePublish = event => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const isPrimium = form.primium.checked
        const publishItem = { title, location, category, description, isPrimium, date, author}
        console.log(publishItem);

        // todo: send to the server 
    }
    return (
        <div className="container mx-auto flex flex-col py-10 md:flex-row">
            <div className="flex-1 bg-base-200 p-4">
                <h2 className='text-center text-3xl font-newsTitle'>Publishe Your Report</h2>
                <div className='bg-base-100 mt-4 '>
                    {/* ------------------- */}

                    <form onSubmit={handlePublish} className='card-body'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name='title' type="text" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className='grid grid-cols-1 md:gap-4 md:grid-cols-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input name='location' type="text" placeholder="location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Choose Category</span>
                                </label>
                                <select className="h-full p-3 rounded-md" name="category">
                                    <option value="Sports">Sports</option>

                                    <option value="Politice">Politice</option>

                                    <option value="World">World</option>
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
                                <textarea name='description' type="text" placeholder="description" className="textarea textarea-bordered" required />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='form-control border'>

                                <input type="file" className="file-input file-input-bordered w-full h-full" name='photo' />
                            </div>
                            <div className='border p-1 rounded'>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Is Primium:</span>
                                        <input name='primium' type="checkbox" className="toggle" />

                                    
                                    </label>
                                </div>


                            </div>
                        </div>
                        <div className='text-center'>
                            <input className='text-center btn btn-primary' type="submit" value="Post" />
                        </div>
                    </form>


                    {/* ---------------------- */}
                </div>
            </div>
            <div className="max-w-[280px] bg-base-200 hidden md:block">
                {/* <img className='mb-5' src={ad1} alt="" /> */}
                <img className='w-full' src={ad2} alt="" />
            </div>
        </div>
    );
};

export default AddArticle;