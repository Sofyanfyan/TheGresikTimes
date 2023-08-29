import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react'
import { registerForm } from '../store/action/actionCreator';

import Swal from 'sweetalert2'

function NewsForm() { 

   const [formRegister, setFormRegister] = useState({
      username:'',
      email: '', 
      password: '', 
      phoneNumber: '', 
      address: '', 
   })

   const changeHandler = (e) => {
      
      const {name, value} = e.target
      
      const obj = {
         ...formRegister,
         [name]: value
      }

      setFormRegister(obj)
   }


   const submitHandler = (e) => {
      e.preventDefault()
      registerForm(formRegister)
      .then(_ =>{
         Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User has been saved',
            showConfirmButton: false,
            timer: 1500
         })
         setFormRegister({
            username:'',
            email: '', 
            password: '', 
            phoneNumber: '', 
            address: '', 
         })
      })
      .catch((err) => {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err,
         })
      })
   }
   return (
   

   <Card className="mt-5">   
      <Card.Body>
      <Card.Title>Form Register</Card.Title>
      <Form className="container my-5" onSubmit={submitHandler}>

         <Form.Group className="mb-3" controlId="username">

            <Form.Label>Username</Form.Label>
            <Form.Control required type="text" placeholder="Enter username" style={{width: '800px'}} onChange={changeHandler} name="username" value={formRegister.username}/>

         </Form.Group>

         <Form.Group className="mb-3" controlId="email">

            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Enter Email" style={{width: '800px'}} onChange={changeHandler} name="email" value={formRegister.email}/>
      
         </Form.Group>

         <Form.Group className="mb-3" controlId="password">

            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Enter password" style={{width: '800px'}} onChange={changeHandler} name="password" value={formRegister.password}/>

         </Form.Group>


         <Form.Group className="mb-3" controlId="phoneNumber">

            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="text" placeholder="Enter Phone number here" style={{width: '800px'}} onChange={changeHandler} name="phoneNumber" value={formRegister.phoneNumber}/>

         </Form.Group>


         <Form.Group className="mb-3" controlId="address">

            <Form.Label>Address</Form.Label>
            <Form.Control required type="text" placeholder="Enter address here" style={{width: '800px'}} onChange={changeHandler} name="address" value={formRegister.address}/>

         </Form.Group>


      
      <Button variant="secondary" type="submit" style={{ margin: '20px' }}>
         Create
      </Button>
      </Form>
      </Card.Body>
   </Card>   
   );

}


export default NewsForm