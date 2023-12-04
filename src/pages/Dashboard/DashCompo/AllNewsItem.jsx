import PropTypes from 'prop-types'
import { FaHourglassEnd } from 'react-icons/fa';
import { MdDelete, MdDoneOutline, MdWorkspacePremium } from "react-icons/md";
import useAxiosPublic from '../../../hook/useAxiosPublic';
import useNews from '../../../hook/useNews';
import Swal from 'sweetalert2'
import useAllNews from '../../../hook/useAllNews';
import { useState } from 'react';


const AllNewsItem = ({ item }) => {
    const { img, title, author, authorEmail, status, date, _id, isPrimium } = item;
    // console.log(status);
    // const shortTitle = title.length > 25 ? title.slice(0,25)+'...': title
    const day = date.slice(0, 10)
    const time = date.slice(11, 19)

    const axiosPublic = useAxiosPublic()
    const [, refetch] = useAllNews()
    // console.log(item);

    const handleApprove = (id) => {
        console.log(id);
        axiosPublic.patch(`/allnews/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({

                        icon: "success",
                        title: "Your News Post successfuly",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            })
    }

// const [isTrue, setIsTrue] = useState(isPrimium)
// const handlePremium = id =>{
//     // setIsTrue(!isTrue)
//     // console.log(id, isTrue);
//     axiosPublic.patch(`/makepremium/${id}`)
//     .then(res =>{
//         console.log(res.data);
//         // refetch()
//     })
// }


const handleDelete = id =>{
    console.log(id);
    axiosPublic.delete(`/allnews/${id}`)
    .then(res => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
            Swal.fire({

                icon: "success",
                title: "Your News Post successfuly",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }
    })
}
    return (
        <tr className='border'>
            <td className='p-1'>
                <img className='h-10 w-16 ' src={img} alt="" />
            </td>
            <td className='max-w-5xl p-1'>{title}</td>
            <td className='p-1'>{author}</td>
            <td className='p-1'>{authorEmail}</td>
            <td className='p-1'>{status}</td>
            <td className='p-1'>
                <div>
                    <p>{day}</p>
                    <p>{time}</p>
                </div>
            </td>
            <td className='p-1 '>{author}</td>
            <td className='p-1 text-center'>
                {/* approve button ---- */}
                <button onClick={() => handleApprove(_id)} className={`${status === 'approve' ? 'bg-green-200': ''} btn text-xl rounded-full h-12 w-12 p-0`}>
                    {status === 'pending' ? <FaHourglassEnd /> : <MdDoneOutline />}
                </button>
            </td>
            <td className='p-1 text-center'>
                <button onClick={()=>handleDelete(_id)} className='btn bg-red-200 rounded-full text-xl h-12 w-12 p-0'>
                    <MdDelete className='' />
                </button>
            </td>
            <td className='p-1 text-center'>
                <button  className={`${isPrimium===true? 'bg-blue-200': ''} btn rounded-full text-xl p-0 h-12 w-12`}>
                    <MdWorkspacePremium />
                </button>
            </td>

        </tr>

    );
};
AllNewsItem.propTypes = {
    item: PropTypes.object
}

export default AllNewsItem;