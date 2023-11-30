import NewsItem from "../Components/NewsItem";
import useNews from "../hook/useNews";

const Economy = () => {
    const [news] = useNews()
    return (
        <div>
            <div className="divider divider-start">
                <h2 className="font-newsTitle text-2xl">Economy</h2>
            </div>
            <div className="">
            {
                news.slice(0,5).map(item => <NewsItem 
                    key={item._id}
                    item={item}
                ></NewsItem>)
            }
            </div>
        </div>
    );
};

export default Economy;