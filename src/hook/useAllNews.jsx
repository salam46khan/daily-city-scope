import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllNews = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: allnews = [] } = useQuery({
        queryKey: ['allnews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allnews`)
            return res.data
        }
    })
    return [allnews, refetch]
};

export default useAllNews;