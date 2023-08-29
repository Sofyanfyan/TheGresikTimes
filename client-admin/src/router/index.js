import { createBrowserRouter, redirect } from "react-router-dom";
import TableView from '../views/TableView'
import NewsForm from "../views/NewsForm";
import LoginView from '../views/LoginView'
import Layout from '../views/Layout'
import CategoryView from '../views/CategoryView'


const router = createBrowserRouter([
   {
      element: <Layout />,
      loader: () => {
         const isLogin = localStorage.access_token 
         if(!isLogin){
            throw redirect('/login');
         }
         return null
      },
      children: [
         {
            path:"/", 
            element: <TableView/>
         },
         {
            path:"/categories",
            element: <CategoryView/>
         },
         {
            path: "/register",
            element: <NewsForm/>
         }
      ]
   },
   {
      path: '/login',
      loader: () => {
         const isLogin = localStorage.access_token 
         if(isLogin){
            throw redirect('/');
         }
         return null
      },
      element: <LoginView/>,
   }
])




export default router