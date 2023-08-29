import UncontrolledExample from "../components/Carousel"
import Footer from "../components/Footer"
// import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
// import { fetchNewsUser } from "../store/action/actionUserCreator"
import CardHome from "../components/CardHome"
import { news } from '../data'

function Home() {  

   // const news = useSelector((state) => {
   //    return state.news.news
   // })

   // const dispatch = useDispatch();

   useEffect(() => {
      // dispatch(fetchNewsUser())
      // eslint-disable-next-line
   },[])


   return (
      <>

      <UncontrolledExample/>

      <main>
         <article>

         <div className="section__related">
            <div className="section__left">
               <hr/>
               <section className="section__more">
                  <h3><a href="/">News list</a></h3>
                  <div>

                     {
                        news.map( el => <CardHome key={el.id} news={el}/> )
                     }

                  </div>

                  </section>
                  </div>
               </div>
         </article>
      </main>


      <Footer/>
      </>
   )
   
}

export default Home