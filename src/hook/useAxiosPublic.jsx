import axios from "axios";

const axiosPublic = axios.create({
    baseURL: ('http://localhost:5000/news')
})
const useAxiosPublic = () => {
   return axiosPublic
};

export default useAxiosPublic;