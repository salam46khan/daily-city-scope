import PropTypes from 'prop-types';
import { FaUserEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { MdWorkspacePremium } from "react-icons/md";
const TopNewsItem = ({item}) => {
    const {img, title, _id, description, author, isPrimium} = item;
    const newsTitle = title.length>50 ? title.slice(0,50)+'...': title;
    // const navigate = useNavigate()
    const handleDetailsNews = (id) =>{
        console.log(id);
        // to={`/news/${_id}`}
        // navigate(`/news/${id}`)
    }
    return (
        <div className='overflow-hidden border rounded-md hover:shadow-md relative'>
            <img className=' object-cover w-full h-[160px]' src={img} alt="" />
            <div className='w-full p-2'>
                <Link to={`/news/${_id}`} onClick={()=>handleDetailsNews(_id)} className='text-xl font-newsTitle font-semibold hover:text-blue-600 hover:underline leading-tight'>{newsTitle}</Link>
                <p className='text-xs flex items-center gap-2 text-red-500'><FaUserEdit className='text-md'/> {author}</p>
                <p className='text-slate-400 font-thin'>
                    {description.length>70 ? description.slice(0,70)+'...': description} <Link className='btn btn-link p-1' to={`/news/${_id}`}>read more</Link>
                </p>
                {
                    isPrimium ? <div className='absolute top-0 right-0 z-10 bg-white  text-3xl'><MdWorkspacePremium /></div> : ''
                }
            </div>
        </div>
    );
};
TopNewsItem.propTypes = {
    item: PropTypes.object
}
export default TopNewsItem;