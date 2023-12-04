import PropTypes from 'prop-types'
import { BiUserCircle } from 'react-icons/bi';
import { FaUser, FaUsersCog } from 'react-icons/fa';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2'
import useUser from '../../../hook/useUser';

const AllUserItem = ({item}) => {
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useUser()
    // console.log(item);
    const {name, email, photoURL, role, _id} = item;
    const handleMakeAdmin = id =>{
        console.log(id);
        axiosSecure.patch(`/user/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.modifiedCount>0){
                    Swal.fire({
                        icon: "success",
                        title: 'You make admin successfuly',
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
    }
    return (
        <tr>
        <th>
            {
                photoURL ? <img className='h-10 w-10 rounded-full' src={photoURL} alt="" /> : <BiUserCircle className='text-5xl'></BiUserCircle>
            }
            
        </th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
            <button onClick={()=>handleMakeAdmin(_id)} className={`btn text-3xl ${role=='admin' ? 'btn-success': ''}`}>
                {
                    role==='admin' ? <FaUsersCog></FaUsersCog> : <FaUser></FaUser>
                }
            </button>
        </td>
      </tr>
    );
};
AllUserItem.propTypes = {
    item: PropTypes.object
}
export default AllUserItem;