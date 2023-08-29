import { Link, useNavigate} from 'react-router-dom'

function Sidebar(){

   const navigate = useNavigate()

   const handleLogout = (e) =>{
      
      e.preventDefault()
      localStorage.clear()
      navigate('/login')
      
   }
   
   return (
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light Sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
         <span className="fs-4">News Portal</span>
      </a>
         <hr />
      <ul className="nav nav-pills flex-column mb-auto">
         <li>
            <Link to={'/'} className="nav-link link-dark">
            <i className="fa-regular fa-newspaper me-3"></i>
               News
            </Link>
         </li>
         <li>
            <Link to={"/categories"} className="nav-link link-dark">
            <i className="fa-solid fa-tag me-3"></i>
               Category
            </Link>
         </li>
         <li>
            <Link to={"/register"} className="nav-link link-dark">
            <i class="fa-solid fa-user-plus me-3"></i>
               Register
            </Link>
         </li>
      </ul>
      <hr />
      
      <div className="text-center">
         <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>
      </div>
   </div>
   )
}

export default Sidebar