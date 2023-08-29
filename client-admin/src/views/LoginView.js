import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { useDispatch } from 'react-redux';
import { useState } from "react"
import { loginForm } from '../store/action/actionCreator';
import { useNavigate } from "react-router-dom"

import Swal from 'sweetalert2'

function FormTextExample() {

   // const dispatch = useDispatch()


   // const dispatch = useDispatch()
   const navigate = useNavigate()


   const [formLogin, setFormLogin] = useState({
      email: '', 
      password: '',
   })

   const changeHandler = (e) => {
      
      const {name, value} = e.target

      const obj = {
         ...formLogin, 
         [name]: value, 
      };

      setFormLogin(obj)
   }

   const submitHandler = (e) => {
      e.preventDefault()
      loginForm(formLogin)
      .then(() => navigate('/'))
      .catch(error => {
         console.log(typeof error);
         console.log(error);
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
         })
      })
   }

   return (
   <Card style={{width: "900px", margin: "auto", marginTop:"200px"}}>

      <h2 className="p-4"> Login Form Admin
      </h2>

      <Form className="p-5" onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} required/>
         <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" placeholder="Password" name="password" onChange={changeHandler} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
         Submit
      </Button>
      </Form>
   </Card>
   );
}

export default FormTextExample;