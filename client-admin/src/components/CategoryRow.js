import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../store/action/actionCreator';
import CustomModalEditCategory from './CustomModalEditCategory';

function CategoryRow(props){

   const {category} = props

   const dispatch = useDispatch();

   const deleteHandler = (e) => {
      e.preventDefault();
      dispatch(deleteCategory(category.id))
   }

   return(
      <tr>
            <td>{category.name}</td>
            <td>
               <CustomModalEditCategory category={category} />
               <Button variant="danger" className="ms-2" onClick={deleteHandler}>Delete</Button> 
            </td>
      </tr>
   )

}

export default CategoryRow;