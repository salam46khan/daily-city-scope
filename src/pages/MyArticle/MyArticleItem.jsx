import { FaUpload } from "react-icons/fa";
import { MdDelete, MdOutlineReadMore } from "react-icons/md";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const MyArticleItem = ({item, index}) => {
    const {title, _id, status, isPrimium} = item;
    // console.log(isPrimium);
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
                <button className="btn btn-ghost text-red-500 text-3xl">
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