import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import useNews from '../hook/useNews';
const Banner = () => {
    const [news] = useNews()
    console.log(news.length);
    return (
        <div className="container mx-auto bg-base-200 relative -z-10">
            <div>
                <Swiper
                    rewind={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide>
                        <div className='w-full mx-10'>
                            <button className='btn btn-primary'>jjjjjjjjjj</button>
                            <Link to={'/all'}> go to all</Link>
                        </div>
                    </SwiperSlide> */}

                    {
                        news.slice(0,5).map((item) => <SwiperSlide key={item._id}>
                            <div>
                                <div className='z-0 relative'>
                                    <img className="w-full h-[220px] md:h-[300px] lg:h-[450px] object-cover -z-10" src={item.img} alt="" />
                                    <div className='absolute left-0 bottom-0 h-[40%]   bg-gradient-to-t from-[#000e] to-[#fff0] w-full'>
                                        <div className='p-3 h-full cursor-pointer z-30 flex items-center '>
                                            <Link to={`item/${item._id}`} className='hover:text-blue-400 text-white hover:underline cursor-pointer font-bold z-10 text-2xl md:text-3xl font-newsTitle'>{item.title}</Link>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;