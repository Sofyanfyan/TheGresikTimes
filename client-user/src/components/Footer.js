import logo from '../components/image/Gresik.png'

function Footer (){
   return (
      <footer className="footer">
      <div className="footer__logo">
         <a href="/"><img src={logo} alt="The new york times logo" /></a>
         <a href="/">Go to Home Page </a>
      </div>

      <div className="footer__main">

         <div>
            <h5>NEWS</h5>
            <ul>
               <li><a href="/">Home Page</a></li>
               <li><a href="/">World</a></li>
               <li><a href="/">U.S</a></li>
               <li><a href="/">Politics</a></li>
               <li><a href="/">Election 202</a></li>
               <li><a href="/">New York</a></li>
               <li><a href="/">Business</a></li>
               <li><a href="/">Tech</a></li>
               <li><a href="/">Science</a></li>
               <li><a href="/">Sports</a></li>
               <li><a href="/">Obituaries</a></li>
               <li><a href="/">Today's Paper</a></li>
               <li><a href="/">Corrections</a></li>
            </ul>
         </div>

         <div>
            <h5>OPINION</h5>
            <ul>
               <li><a href="/">Today's Opinion</a></li>
               <li><a href="/">Op-Ed columnists</a></li>
               <li><a href="/">Editorials</a></li>
               <li><a href="/">Op-Ed ontributions</a></li>
               <li><a href="/">Letters</a></li>
               <li><a href="/">Sunday Review</a></li>
               <li><a href="/">Video: Opinion</a></li>
            </ul>
         </div>

         <div>
            <h5>ARTS</h5>
            <ul>
               <li><a href="/">Today's Arts</a></li>
               <li><a href="/">Art & Design</a></li>
               <li><a href="/">Books</a></li>
               <li><a href="/">Dance</a></li>
               <li><a href="/">Movies</a></li>
               <li><a href="/">Music</a></li>
               <li><a href="/">Pop Culture</a></li>
               <li><a href="/">Television</a></li>
               <li><a href="/">Theatre</a></li>
               <li><a href="/">VideoL Arts</a></li>
            </ul>
         </div>

         <div>
            <h5>LIVING</h5>
            <ul>
               <li><a href="/">Automobiles</a></li>
               <li><a href="/">Crossword</a></li>
               <li><a href="/">Education</a></li>
               <li><a href="/">Food</a></li>
               <li><a href="/">health</a></li>
               <li><a href="/">Jobs</a></li>
               <li><a href="/">Magazine</a></li>
               <li><a href="/">Parenting</a></li>
               <li><a href="/">Real Estate</a></li>
               <li><a href="/">Style</a></li>
               <li><a href="/">T Magazine</a></li>
               <li><a href="/">Travel</a></li>
               <li><a href="/">Love</a></li>
            </ul>
         </div>

         <div>
            <h5>MORE</h5>
            <ul>
               <li><a href="/">Reader Center</a></li>
               <li><a href="/">Wirecutter</a></li>
               <li><a href="/">Live Events</a></li>
               <li><a href="/">The Learning Network</a></li>
               <li><a href="/">Tools & Services</a></li>
               <li><a href="/">N.Y.C Events</a></li>
               <li><a href="/">Multimedia</a></li>
               <li><a href="/">Photography</a></li>
               <li><a href="/">Video</a></li>
               <li><a href="/">Newsletters</a></li>
               <li><a href="/">NYT Store</a></li>
               <li><a href="/">Times Journeys</a></li>
               <li><a href="/">Manage My Account</a></li>
            </ul>
         </div>

         <div className="footer__subscribe">
            <h5>SUBSCRIBE</h5>
            <ul className="subscribe__list">
               <li className="subscribe"><strong><a href="/"><i className="far fa-newspaper"></i>Home Delivery</a></strong></li>
               <li className="subscribe"><strong><a href="/"><i className="fab fa-tumblr"></i>Digital Subscriptions</a></strong>
               </li>
               <li className="subscribe"><strong><a href="/"><i className="fab fa-delicious"></i>Crossword</a></strong></li>
               <li className="subscribe"><strong><a href="/"><i className="fas fa-utensils"></i>Cooking</a></strong></li>
               <li><a href="/">Email Newsletters</a></li>
               <li><a href="/">Corporate Subscriptions</a></li>
               <li><a href="/">Education Rate</a></li>
               <li>
                  <hr/>
               </li>
               <li><a href="/">Mobile Applications</a></li>
               <li><a href="/">Replica Edition</a></li>

            </ul>
         </div>
      </div>

      <div className="footer__fixed">
         <a href="/">Access more of The Times by creating a free acount or logging in</a>
      </div>
   </footer>
   )
}

export default Footer