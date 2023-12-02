import { useState } from "react";
import Marque from "../../Shared/Marque";
import ad1 from '../../assets/ad-report.gif';
import ad2 from '../../assets/job circular.gif';
import useNews from "../../hook/useNews";
import TopNewsItem from "../../Components/TopNewsItem";
import Education from "../../Shared/Education";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useUser from "../../hook/useUser";

const AllArticle = () => {
    const [news] = useNews()
    const [users] = useUser()
    // console.log(users);
    const [allNews, setAllNews] = useState(news);
    const axiosPublic = useAxiosPublic()

    let searchText = '';
    const handleInputValue = e =>{
        searchText = e.target.value
        // console.log(searchText);
    }

    const handleSearch = () => {
        axiosPublic.get(`/search?name=${searchText}`)
        .then(res => {
            // console.log(res.data);
            setAllNews(res.data)
        })
    }

    const handleFilter = e =>{
        const filtertext = e.target.value;
        console.log(filtertext);
        axiosPublic.get(`/filter?filtertext=${filtertext}`)
        .then(res => {
            // console.log(res.data);
            setAllNews(res.data)
        })
    }
    return (
        <div>
            <Marque></Marque>
            <div className="container mx-auto flex p-3">
                <div className="flex-1 py-5 p-3">
                    <div>
                        <h1 className="text-4xl font-newsTitle text-center">All News</h1>
                        <hr />
                    </div>
                    <div className="flex flex-col md:flex-row items-center py-2 justify-between gap-3">
                        <div className="form-control ">
                            <div className="input-group join">
                                <input onChange={handleInputValue} className="input join-item input-bordered" type="text" placeholder="search" name="search"/>
                                <button onClick={handleSearch} className="btn  join-item btn-primary text-2xl">
                                    <FaSearch></FaSearch>
                                </button>
                            </div>
                        </div>
                        <div>
                            <select onChange={handleFilter} className="select max-w-min w-full border select-bordered">
                                <option disabled selected>Filter Author Name</option>
                                {
                                    users.map(userr => <option key={userr._id}>{userr.name}</option>)
                                }
                                {/* <option>abu esa</option> */}
                            </select>
                        </div>

                        
                    </div>
                    <hr />
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                        {
                            allNews.map(item => <TopNewsItem key={item._id} item={item}></TopNewsItem>)
                        }
                    </div>
                </div>
                <div className="w-[280px] hidden lg:block bg-base-200">
                    <img className="w-full mb-3" src={ad1} alt="" />
                    <img className="w-full" src={ad2} alt="" />
                    <div className="p-3">
                    <Education></Education>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllArticle;