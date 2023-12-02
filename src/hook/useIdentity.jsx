import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider";

const useIdentity = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { refetch, data: identity = [] } = useQuery({
        queryKey: ['news', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user?email=${user.email}`)
            return res.data
        }
    })
    return [identity, refetch]
};

export default useIdentity;