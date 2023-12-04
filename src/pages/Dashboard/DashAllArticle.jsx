import useAllNews from "../../hook/useAllNews";
import AllNewsItem from "./DashCompo/AllNewsItem";
// import useNews from "../../hook/useNews";

const DashAllArticle = () => {
    // const [refetch] = useNews()
    const [allnews] = useAllNews()
    return (
        <div>
            <h2 className='text-3xl'>All News</h2>
            <hr />
            <p className="text-xl">Total News:{allnews.length}</p>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table table-zebra border">
                        {/* head */}
                        <thead >
                            <tr>
                                <th>Photo</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Author Email</th>
                                <th>Starus</th>
                                <th>Date</th>
                                <th>Publisher</th>
                                <th>
                                    <button>Approve</button>
                                </th>
                                <th>
                                    <button>Delete</button>
                                </th>
                                <th>
                                    <button>Premium</button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                allnews.map(item => <AllNewsItem key={item._id} item={item}></AllNewsItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DashAllArticle;