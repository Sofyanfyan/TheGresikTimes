/* eslint-disable jsx-a11y/alt-text */
import { useDispatch } from "react-redux"
import { deleteNews } from "../store/action/actionCreator"
import CustomModal from "./CustomModalEdit"


function NewsRow({news}){

   const dispatch = useDispatch()

   const deleteHandler = (e) => {
      e.preventDefault();
      dispatch(deleteNews(news.id)) 
   }

   return (
      <>
      <tr>
         <td>{ news.title }</td>
         <td>{ news.slug }</td>
         <td>{ news.content }</td>
         <td> <img src={news.imgUrl} className="image-news"/> </td>
         <td>{ news.Category.name }</td>
         <td> {
               news.Tags.map(el => {
               
                  return <p key={el.id}> {el.name} </p>
               }) 
            }
         </td>
         <td>{ news.User.username }</td>
         <td> 
            <CustomModal name="Edit News" buttonTxt="Edit" news={news}/>  
            <button className="btn btn-danger ms-1" onClick={deleteHandler}>Delete</button>
         </td>
      </tr>
      </>
   )
}

export default NewsRow