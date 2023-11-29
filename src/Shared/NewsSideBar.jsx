import NewsItem from "../Components/NewsItem";
import useNews from "../hook/useNews";

const NewsSideBar = () => {
    const [news] = useNews()
    const a = news.slice(0, 5)
    console.log(news);
    
    return (
        <div>
            <div className="divider divider-start">
                <h2 className="font-newsTitle text-2xl">Politice</h2>
            </div>
            <p>{news.length}</p>
            <div className="">
            {
                a.map(item => <NewsItem 
                    key={item._id}
                    item={item}
                ></NewsItem>)
            }
            </div>
        </div>
    );
};

export default NewsSideBar;