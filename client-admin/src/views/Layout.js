import { Outlet } from "react-router-dom";
import CustomSidebar from '../components/CustomSidebar'

function Layout(){

return (

   <div class="container-fluid">
            <div class="row">

               <div class="col-2">
                  <CustomSidebar />
               </div>


               <div class="col-10">

                  <Outlet/>

            </div>
         </div>
   </div>
)

}

export default Layout