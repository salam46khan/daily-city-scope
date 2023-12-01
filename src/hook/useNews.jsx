// import { useState } from "react"
// import { useEffect } from "react"
import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useNews = ()=>{
    // const [news, setNews] = useState([])
    const axiosPublic = useAxiosPublic()
    // useEffect(()=>{
    //     fetch('http://localhost:5000/news')
    //     .then(res => res.json())
    //     .then(data => {
    //         setNews(data)
    //     })
    // },[])


    // axiosPublic.get('/news')
    // .then(res =>{
    //     // console.log(res.data);
    //     setNews(res.data)
    // })
    
    // return [news]



    const {refetch ,data: news = []} = useQuery({
        queryKey: ['news'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/news`)
            return res.data
        }
    })
    return [news, refetch]


}
export default useNews