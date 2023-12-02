import NewsItem from "../Components/NewsItem";
import useNews from "../hook/useNews";

const Education = () => {
    const [news] = useNews()
    const education = news.filter(item => item.category === "Education");
    return (
        <div>
            <div className="divider divider-start">
                <h2 className="font-newsTitle text-2xl">Education</h2>
            </div>
            <div className="">
            {
                education.slice(0,5).map(item => <NewsItem 
                    key={item._id}
                    item={item}
                ></NewsItem>)
            }
            </div>
        </div>
    );
};

export default Education;