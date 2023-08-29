import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CustomModalAddCategory from '../components/CustomModalAddCategory';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../store/action/actionCreator';
import CategoryRow from '../components/CategoryRow';

function CategoryView() {
   
   const dispatch = useDispatch()

   const category = useSelector((state) =>{
      return state.category.category
   })

   useEffect(() => {
      dispatch(fetchCategory())
      // eslint-disable-next-line
   },[])
   
   return (
   
   <>
   <h2 className="my-4">
      List Category
   </h2>

   <CustomModalAddCategory className="my-5"/>

   <Card className="mt-5">
      <Table striped bordered hover>
      <thead>
         <tr>
            <th>Name</th>
            <th>Action</th>
         </tr>
      </thead>
      <tbody>
            {
               category.map(el => <CategoryRow key={el.id} category={el}/>)
            }
      </tbody>
      </Table>
   </Card>
   </>   
   );
}

export default CategoryView;