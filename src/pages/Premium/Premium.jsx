import Marque from "../../Shared/Marque";
import useNews from "../../hook/useNews";
import ad from '../../assets/job circular.gif'
import TopNewsItem from "../../Components/TopNewsItem";

const Premium = () => {
    const [news] = useNews()
    const premium = news.filter(item => item.isPrimium === true);
    return (
        <div>
            <Marque></Marque>
            <div className="container mx-auto flex flex-col md:flex-row px-3 py-5">
                <div className="flex-1">
                    <div>
                        <h1 className="text-4xl font-newsTitle text-center">Premium News</h1>
                        <hr />
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3 mt-5">
                    {
                        premium.map(item=> <TopNewsItem key={item._id} item={item}></TopNewsItem>)
                    }
                    </div>
                </div>
                <div className="min-w-[280px] hidden lg:block bg-base-300">
                    <img className="w-full" src={ad} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Premium;