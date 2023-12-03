import { FaUpload } from "react-icons/fa";
import { MdDelete, MdOutlineReadMore } from "react-icons/md";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import useAxiosSecure from "../../hook/useAxiosSecure";
import useNews from "../../hook/useNews";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from 'sweetalert2'

const MyArticleItem = ({item, index}) => {
    const {title, _id, status, isPrimium} = item;
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const [,refetch] = useNews()
    // console.log(isPrimium);

    const handleDelete = (id) =>{
        console.log(id);
        axiosPublic.delete(`/mynews/${id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.deletedCount>0){
                Swal.fire({
                        
                    icon: "success",
                    title: "Your News delete successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}.</th>
            <td>{title}</td>
            <td>
                <Link to={`/news/${_id}`} className="btn btn-ghost text-blue-600 text-3xl">
                    <MdOutlineReadMore />
                </Link>
            </td>
            <td>{status}</td>
            <td>{isPrimium ? 'Yes' : 'No'}</td>
            <td>
                <Link to={`/my-article-upload/${_id}`} className="btn btn-ghost text-green-400 text-3xl">
                    <FaUpload />
                </Link>
            </td>
            <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-ghost text-red-500 text-3xl">
                    <MdDelete></MdDelete>
                </button>
            </td>
        </tr>
    );
};

MyArticleItem.propTypes ={
    item: PropTypes.object,
    index: PropTypes.number
}
export default MyArticleItem;