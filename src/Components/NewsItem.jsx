import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider";

const NewsItem = ({item}) => {
    const {img, title, _id} = item
    const navigate = useNavigate()
    const newsTitle = title.length>35 ? title.slice(0,35)+'...': title;
    const {user} = useContext(AuthContext)
    const handleDetails = id =>{
        console.log(id);
        
        if(user){
            // update news view here 
            console.log('do somthing');
            return
        }else{
            Swal.fire({
                title: "You are not user!",
                text: "You can't visit details page",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Do you want to be a User!"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              });
        }

        
    }
    return (
        <div className='flex items-center rounded my-3 gap-1 p-2 bg-[#00000016] shadow-md shadow-[#0004]'>
            <img className='h-16 rounded w-24' src={img} alt="" />
            <div>
                <Link to={`/news/${_id}`} onClick={()=>handleDetails(_id)} className="hover:underline hover:text-blue-500 font-newsTitle">{newsTitle}</Link>
            </div>
            
        </div>
    );
};

NewsItem.propTypes = {
    item: PropTypes.object
}

export default NewsItem;