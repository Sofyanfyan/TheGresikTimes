import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { createCategory } from '../store/action/actionCreator';
import { useDispatch } from 'react-redux';


function CustomModalAddCategory() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [formCategory, setFormCategory] = useState({
      name:""
   })

   const dispatch = useDispatch();

   const changeHandler = (e) => {
      const {name, value} = e.target
      
      const obj ={

         ...formCategory, 
         [name]: value,
      }

      setFormCategory(obj)
   }

   const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(createCategory(formCategory))
      setShow(false)
   }

   return (
      <>
      <Button variant="secondary" onClick={handleShow}>
         Add Category
      </Button>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>

         <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Enter name category" name="name" onChange={changeHandler} value={formCategory.name}/>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button className="ms-2" variant="primary" type="submit">
            Save
            </Button>
         </Form>
         </Modal.Body>
         <Modal.Footer>
         </Modal.Footer>
      </Modal>
      </>
   );
}

export default CustomModalAddCategory;