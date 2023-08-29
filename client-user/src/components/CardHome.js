import { Link } from "react-router-dom"

function CardHome (props){

   const {news} = props

   const date = news.createdAt.slice(0,10)

   return (
      <div className="article__box">
                        <figure>
                           <img
                              src={news? news.imgUrl : "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg"}
                              alt="" style={{height: "200px"}} />
                           <figcaption>{ news.User.username }</figcaption>
                        </figure>
                        <h4> <Link to={`/news/${news.id}`}>{news.title}</Link></h4>
                        <p>{date}</p>
                     </div>
   )
}

export default CardHome