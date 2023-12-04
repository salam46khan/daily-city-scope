import usePublisher from "../../hook/usePublisher";

const AllPublisher = () => {
    
    const [publishers] = usePublisher()
    return (
        <div className='publisherBg'>
            <div className="container mx-auto p-5 py-10">
                <div className="text-center pb-5">
                    <h2 className="text-3xl text-white font-newsTitle">All Publisher</h2>
                    <p className="text-slate-300">Enjoy the convenience of accessing Daily CityScope <br /> on any device, anytime, and anywhere. </p>
                </div>
                <div className="py-5">
                    <div className="flex justify-center gap-5 flex-wrap">
                        {
                            publishers.map(item => <div key={item._id} className="border rounded-md pb-5 pt-8 px-2 text-center w-[240px] flex flex-col hover:bg-[#ffffff29] hover:shadow-white shadow-md">
                                <img className="h-[190px] mx-auto rounded-full w-[200px]" src={item.PublisherLogo} alt="" />
                                <h3 className="font-newsTitle font-bold text-2xl mt-7 text-white">{item.PublisherName}</h3>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPublisher;