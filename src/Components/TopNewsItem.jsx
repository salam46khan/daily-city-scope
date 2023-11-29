import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const TopNewsItem = ({item}) => {
    const {img, title, date, author} = item
    return (
        <div className='z-0 relative'>
            <img className="w-full h-[220px] md:h-[300px] lg:h-[450px] object-cover -z-10" src={img} alt="" />
            <div className='absolut left-0 bottom-0 h-[40%]   bg-gradient-to-t from-[#000e] to-[#fff0] w-full'>
                <div className='p-3 h-full border cursor-pointer z-30 flex items-center '>
                    <Link to={'/'} className='text-blue-400 cursor-pointer font-bold z-10 text-2xl md:text-3xl font-newsTitle'>{title}</Link>
                   
                </div>
                
            </div>
        </div>
    );
};
TopNewsItem.propTypes = {
    item: PropTypes.object
}

export default TopNewsItem;