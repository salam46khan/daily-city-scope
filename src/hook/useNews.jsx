import { useState } from "react"
import { useEffect } from "react"
import useAxiosPublic from "./useAxiosPublic"

const useNews = ()=>{
    const [news, setNews] = useState([])
    const axiosPublic = useAxiosPublic()
    // useEffect(()=>{
    //     fetch('http://localhost:5000/news')
    //     .then(res => res.json())
    //     .then(data => {
    //         setNews(data)
    //     })
    // },[])
    axiosPublic.get('/news')
    .then(res =>{
        // console.log(res.data);
        setNews(res.data)
    })
    
    return [news]
}
export default useNews