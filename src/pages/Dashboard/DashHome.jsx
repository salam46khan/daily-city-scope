import { Chart } from "react-google-charts";
import useUser from "../../hook/useUser";
import useNews from "../../hook/useNews";
import useAllNews from "../../hook/useAllNews";

const DashHome = () => {
    const [user] = useUser();
    const [news] = useNews()
    const [allnews] = useAllNews()
    const pending = allnews.length - news.length
    return (
        <div>
            <h2 className='text-3xl'>Home</h2>
            <hr />
            <p className="text-xl">Total User: {user.length}</p>
            <p className="text-xl">Total Published News: {news.length}</p>
            <p className="text-xl">Total News: {allnews.length}</p>
            <p className="text-xl">Total Pending News: {pending}</p>
            

            <div>
                
            </div>
        </div>
    );
};

export default DashHome;