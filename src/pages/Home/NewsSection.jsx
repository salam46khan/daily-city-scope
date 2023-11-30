// import TopNews from '../../Components/TopNews';
import Banner from '../../Components/Banner';
import Economy from '../../Shared/Economy';

import Politice from '../../Shared/Politice';
import Sports from '../../Shared/Sports';
import ad from '../../assets/job circular.gif'
import reportAd from '../../assets/ad-report.gif'
import useNews from '../../hook/useNews';
import LatastNews from './LatastNews';
const NewsSection = () => {
    const [news] = useNews()
    console.log(news);
    return (
        <div>
            <div className="container mx-auto flex flex-col md:flex-row items-start gap-5 p-3">
                <div className="bg-base-200 w-[250px] hidden lg:block"> 
                    <img className='w-full' src={ad} alt="" />
                    <div className='p-3'>
                        <Economy></Economy>
                    </div>
                    <img className='w-full' src={reportAd} alt="" />
                </div>
                <div className="overflow-hidden flex-1 w-full z-0">

                    <Banner></Banner>
                    <LatastNews></LatastNews>
                    
                </div>
                <div className="bg-base-200 min-w-full overflow-hidden md:min-w-[270px] md:max-w-[270px] p-3 ">
                   
                   <Politice></Politice>
                   <Sports></Sports>
                   <div className='lg:hidden block'>
                   <Economy></Economy>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;