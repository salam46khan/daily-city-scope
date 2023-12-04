import axios from "axios";

const axiosSecure = axios.create({
    baseURL: ('https://daily-city-scope-server.vercel.app')
})
const useAxiosSecure = () => {
    return axiosSecure;
}
export default useAxiosSecure;