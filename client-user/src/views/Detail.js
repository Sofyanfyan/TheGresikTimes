import { useParams } from "react-router-dom"
import { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"
// import { fetchDetailNews } from "../store/action/actionUserCreator"
import { news } from "../data"

function Detail () {

   const params = useParams()

   // const detail = useSelector((state) => {
   //    return state.detail.detail
   // })

   // const dispatch = useDispatch()
   // eslint-disable-next-line
   const filter = news.filter( el => {
      if(el.id === +params.id){
         return el
      }
   })
   
   let detail = filter[0]

   useEffect(() => {

      // dispatch(fetchDetailNews(params.id))
      // eslint-disable-next-line
   },[])

   return (
      <main>
         <article>
            <header>
               <h1><em>{detail? detail.title : ''}</em></h1>
               <div>
                  <img src={detail? detail.imgUrl : "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"} alt="https://static01.nyt.com/images/2014/03/18/science/space/18cosmos/18cosmos-superJumbo.jpg?quality=90&auto=webp" />
                  <blockquote>
                     <p>{ detail? detail.slug : ''} <span>{ detail?  detail.User.username : ''} for The Gresik Times</span> </p>
                  </blockquote>
               </div>
            </header>

            <div class="article__about">
               <p>{ detail?  detail.User.username : ''}</p>
               <div class="article__about__details">
                  <p>{ detail? detail.createdAt.slice(0, 10) : '' }</p>
               </div>
               <p style={{color:"#0F82F0"}}>{detail? "#"+detail.Tags[0].name : ''}<span style={{color:"black"}}>,</span> {detail? "#"+detail.Tags[1].name : ''}<span style={{color:"black"}}>,</span> {detail? "#"+detail.Tags[2].name : ''}<span style={{color:"black"}}>,</span></p>
            </div>

            <div class="article__content">
               <div class="article--center">

                  <p>{ detail? detail.content : ''}</p>

               </div>
            </div>

         </article>
      </main>
   )
}


export default Detail