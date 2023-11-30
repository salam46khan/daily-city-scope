import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const TopNewsItem = ({item}) => {
    const {img, title, _id, description} = item;
    const newsTitle = title.length>50 ? title.slice(0,50)+'...': title;
    // const navigate = useNavigate()
    const handleDetailsNews = (id) =>{
        console.log(id);
        // to={`/news/${_id}`}
        // navigate(`/news/${id}`)
    }
    return (
        <div className='overflow-hidden border rounded-md'>
            <img className=' object-cover w-full h-[160px]' src={img} alt="" />
            <div className='w-full p-2'>
                <Link to={`/news/${_id}`} onClick={()=>handleDetailsNews(_id)} className='text-xl font-semibold hover:text-blue-400 hover:underline leading-tight'>{newsTitle}</Link>
                <p className='text-slate-400'>
                    {description.length>70 ? description.slice(0,70)+'...': description}
                </p>
            </div>
        </div>
    );
};
TopNewsItem.propTypes = {
    item: PropTypes.object
}
export default TopNewsItem;