// import { useState } from "react"
// import { useEffect } from "react"
import useAxiosPublic from "./useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const useNews = () => {
    // const [news, setNews] = useState([])
    const axiosPublic = useAxiosPublic()
    



    const { refetch, data: news = [] } = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/news`)
            return res.data
        }
    })
    return [news, refetch]


}
export default useNews