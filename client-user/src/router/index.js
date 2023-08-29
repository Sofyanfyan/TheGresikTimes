import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/Layout";
import Home from "../views/Home"
import Detail from "../views/Detail"

const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path:'/',
            element: <Home/>
         },
         {
            path:'/news/:id',
            element: <Detail />
         }
      ]
   }
])

export default router