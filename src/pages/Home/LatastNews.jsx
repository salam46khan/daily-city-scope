import TopNewsItem from "../../Components/TopNewsItem";
import useNews from "../../hook/useNews";

const LatastNews = () => {
    const [news] = useNews()
    const latest = news.slice(0,8);
    return (
        <div className="py-5">
            <div className="divider divider-start">
                <h2 className="font-newsTitle text-2xl">Latest News</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    latest.map(item => <TopNewsItem key={item._id} item={item}></TopNewsItem>)
                }
            </div>
        </div>
    );
};

export default LatastNews;