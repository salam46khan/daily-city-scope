import Marquee from "react-fast-marquee";
import useNews from "../hook/useNews";
import { Link } from "react-router-dom";
const Marque = () => {
    const [news] = useNews()
    const latest = news.slice(0,6);
    return (
        <div className="bg-red-600 p-3">
            <div className="container mx-auto text-white">
                <Marquee>
                {
                    latest.map(item => <div key={item._id}>
                        <Link to={`/news/${item._id}`} className="mr-5">{item.title} *** </Link>
                    </div>)
                }
                </Marquee>
            </div>
        </div>
    );
};

export default Marque;