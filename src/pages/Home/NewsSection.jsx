// import TopNews from '../../Components/TopNews';
import Banner from '../../Components/Banner';
import NewsSideBar from '../../Shared/NewsSideBar';
import ad from '../../assets/job circular.gif'
import useNews from '../../hook/useNews';
const NewsSection = () => {
    const [news] = useNews()
    console.log(news);
    return (
        <div>
            <div className="container mx-auto flex flex-col md:flex-row items-start gap-5 p-3">
                <div className="bg-red-100 w-[250px] hidden lg:block"> 
                    <img className='w-full' src={ad} alt="" />
                </div>
                <div className="overflow-hidden flex-1 bg-red-200 w-full z-0">

                    <Banner></Banner>
                    
                </div>
                <div className="bg-base-200 min-w-full overflow-hidden md:min-w-[270px] md:max-w-[270px] p-3 ">
                   <NewsSideBar></NewsSideBar>


                   <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam opcum quisquam eum rerum neque omnis. AccusantiuNobis incidunt libero ipsa odit vitae! Voluptatumdantium odio laborum voluptas voluptatibus ipsa sint deleniti inventore totam nulla modi quibusdam amet suscipit veritatis maxime veniam incidunt non, minima saepe. Deleniti fugiat perferendis commodi recusandae doloremque omnis rem, quisquam asperiores molestiae molestias minus expedita veritatis provident. Consectetur tenetur fugiat commodi voluptatibus consequuntur doloremque voluptate, odio vero et sint 
                   </p>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;