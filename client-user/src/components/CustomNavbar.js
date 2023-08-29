import Logo from './image/Gresik.png'
import { Link } from 'react-router-dom'

function CustomNavbar() {
   return (

      <nav  className="nav">
         <ul  className="nav__list">
            <li  className="nav__left">
               <ul>
                  <li><Link  className="link--black" to={'/'}>Home</Link></li>
               </ul>
            </li>
            <li><Link to={"/"}><img  className="logo" src={Logo} alt="The New York Times logo" /></Link></li>
            <li  className="nav__right">
               <ul>
               </ul>
            </li>
         </ul>
      </nav>

   )
}


export default CustomNavbar