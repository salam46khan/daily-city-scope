import { useLoaderData } from "react-router-dom";
import ad from '../assets/ad-report.gif'
import Politice from "./Politice";
const DetailsNews = () => {
    const news = useLoaderData()
    return (
        <div className="py-10">
            <div className="container mx-auto flex gap-5">
                <div className="flex-1 bg-base-200 p-3 border rounded-md">
                    <div className="relative">
                    <img className="w-full rounded-md" src={news.img} alt="" />
                    <p className="absolute bottom-0 right-0 bg-black text-white px-14 py-2 text-xl">{news.category}</p>
                    </div>
                    <div className="py-5">
                        <h2 className="font-newsTitle text-3xl md:text-5xl font-bold">{news.title}</h2>
                        <div className="flex justify-between items-end mt-3">
                            <div>
                            <p className="font-bold text-xl">
                                Author: {news.author}
                            </p>
                            <p>Location: {news.location}</p>
                            </div>
                            <p>
                                Date: {news.date}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="pt-10">
                        <p>{news.description}</p>

                    </div>
                </div>
                <div className="max-w-[300px]">
                    <img className="w-full" src={ad} alt="" />
                    <Politice></Politice>
                </div>
            </div>
            

        </div>
    );
};

export default DetailsNews;