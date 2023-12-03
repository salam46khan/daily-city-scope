import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import MyArticleItem from "./MyArticleItem";

const MyArticle = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure()
    const [myNews, setMyNews] = useState([])
    axiosSecure.get(`mynews?authorEmail=${user.email}`)
        .then(res => {
            // console.log(res.data);
            setMyNews(res.data)
        })

    return (
        <div className="container mx-auto px-3 py-10">
            <div>
                <h2 className="text-center text-4xl">My news</h2>
                <hr />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th>IsPremium</th>
                            <th>Upload</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myNews.map((item, index)=> <MyArticleItem key={item._id} item={item} index={index}></MyArticleItem>)
                        }

                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyArticle;