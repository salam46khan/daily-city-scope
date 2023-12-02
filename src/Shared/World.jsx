import NewsItem from "../Components/NewsItem";
import useNews from "../hook/useNews";

const World = () => {
    const [news] = useNews()
    const wrold = news.filter(item => item.category === "Wrold");
    return (
        <div>
            <div className="divider divider-start">
                <h2 className="font-newsTitle text-2xl">Wrold</h2>
            </div>
            <div className="">
            {
                wrold.slice(0,5).map(item => <NewsItem 
                    key={item._id}
                    item={item}
                ></NewsItem>)
            }
            </div>
        </div>
    );
};

export default World;