import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsItem = ({item}) => {
    const {img, title} = item
    console.log(item);
    return (
        <div className='flex items-center rounded my-3 gap-1 p-2 bg-[#00000016] shadow-md shadow-[#0004]'>
            <img className='h-16 rounded w-24' src={img} alt="" />
            <div>
                <Link to={'/'} className="hover:underline hover:text-blue-500 font-newsTitle">{title}</Link>
            </div>
            
        </div>
    );
};

NewsItem.propTypes = {
    item: PropTypes.object
}

export default NewsItem;