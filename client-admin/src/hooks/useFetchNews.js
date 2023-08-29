import {useEffect, useState} from 'react'
// import { useDispatch, useSelector } from "react-redux";

export default function useFetchNews(){
   
   

   const [news, setNews] = useState([])
   // const news = useSelector((state) => state.news)
   // console.log(news);
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState ("")
   
   useEffect(() => {
      fetchNews()
   },[])

   async function fetchNews(){

      setLoading(true)

      try {
         
         const res = await fetch("http://localhost:3001/News")
         
         if (!res.ok){
            throw new Error("Something Wrong Bruh!");
         }

         const temp = await (res).json()
         setNews(temp)
      } catch (error) {
         setError(error)
      } finally {
         setLoading(false)
      }
   }


   return [news, loading, error]
}