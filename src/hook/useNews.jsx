import { useState } from "react"
import { useEffect } from "react"

const useNews = ()=>{
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data => {
            setNews(data)
        })
    },[])
    return [news]
}
export default useNews