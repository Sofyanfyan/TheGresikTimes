import NewsRow from "../components/NewsRow"
// import useFetchNews from "../hooks/useFetchNews"
import Card from 'react-bootstrap/Card';
import CustomModal from "../components/CustomModal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../store/action/actionCreator";

function Table() {  

   // const [news] = useFetchNews()

   const news = useSelector((state) => {

      return state.news.news
   })

   const dispatch = useDispatch();

   useEffect(() => {
      
      dispatch(fetchNews())
      // eslint-disable-next-line
   }, [])


   return(
   <>
   <h2 className="my-4">List News</h2>

   <CustomModal name="Create News" buttonTxt="Add News"/>

   <Card className="mt-5">
      <table class="table mt-5">
                  <thead>
                     <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Content</th>
                        <th scope="col">Image</th>
                        <th scope="col">Category</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Author</th>
                        <th scope="col">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                        {
                           news.map(news => <NewsRow key={news.id} news={news}/>)
                        }
                  </tbody>
      </table>
   </Card>

   </>
   )
}

export default Table