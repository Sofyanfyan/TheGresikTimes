import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { fetchCategory, postNews } from '../store/action/actionCreator';
import { useDispatch, useSelector } from "react-redux";

function CustomModal(props) {
   

   const {name, buttonTxt} = props
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const dispatch = useDispatch()

   const category = useSelector((state) => {
      return state.category.category
   })

   useEffect(() => {
      
      dispatch(fetchCategory())
      // eslint-disable-next-line
   },[])

   const [formNews, setFormNews] = useState({
      title: '', 
      content: '',
      imgUrl: '',
      CategoryId: 1,
      tag1: '',
      tag2: '',
      tag3: '',
   })

   const changeHandler = (e) => {
      
      const {name, value} = e.target;

      const obj = {
         ...formNews,
         [name]: value,
      };

      setFormNews(obj)
   }

   const submitHandler = (e) =>  {
      e.preventDefault()
      dispatch(postNews(formNews))
      setShow(false)
   }
   

   return (
   <>
      <Button variant="secondary" onClick={handleShow}>
         { buttonTxt }
      </Button>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            
            <Modal.Title>{ name }</Modal.Title>
               </Modal.Header>
                  <Modal.Body>

         <Form className="container my-5" onSubmit={submitHandler}>
         <Form.Group className="mb-3" controlId="formBasicText">

            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title News" name="title" onChange={changeHandler} value={formNews.title}/>
      
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicText">

            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" placeholder="Enter image url here" name="imgUrl" onChange={changeHandler} value={formNews.imgUrl}/>

         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicText">

            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={10} name="content" onChange={changeHandler} value={formNews.content}/>

         </Form.Group>

         <Form.Group>
         <Form.Label>Category</Form.Label>
         <Form.Select aria-label="Default select example" onChange={changeHandler} name="CategoryId">
            <option disabled>Open this select menu</option>
            
            {
               category.map(el=> <option key={el.id} value={el.id}>{el.name}</option>)
            }
         </Form.Select>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicText">

            <Form.Label>Tag</Form.Label>
            <Form.Control className="my-2" type="text" placeholder="Enter Tag 1" name="tag1" onChange={changeHandler} value={formNews.tag1}/>
            <Form.Control className="my-2" type="text" placeholder="Enter Tag 2" name="tag2" onChange={changeHandler} value={formNews.tag2}/>
            <Form.Control className="my-2" type="text" placeholder="Enter Tag 3" name="tag3" onChange={changeHandler} value={formNews.tag3}/>

         </Form.Group>
      
      <Button variant="secondary" onClick={handleClose}>
         Close
      </Button>
      <Button variant="secondary" type="submit" style={{ margin: '20px' }}>
         Create
      </Button>
      </Form>

         </Modal.Body>
            <Modal.Footer>
         </Modal.Footer>
      </Modal>
   </>
   );
}

export default CustomModal