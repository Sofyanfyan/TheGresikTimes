import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, updateNews } from '../store/action/actionCreator';


function CustomModalEdit(props){

   const {name, buttonTxt, news} = props
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const category = useSelector((state) => {
      return state.category.category
   })

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchCategory(category))
      // eslint-disable-next-line
   }, [])

   const [formNews, setFormNews] = useState({
      title: news.title, 
      content: news.content,
      imgUrl: news.imgUrl,
      CategoryId: news.Category.id,
      tag1: news.Tags[0].name,
      tag2: news.Tags[1].name,
      tag3: news.Tags[2].name,
   })

   const changeHandler = (e) => {
      
      const {name, value} = e.target;

      const obj = {
         ...formNews,
         [name]: value,
      };

      setFormNews(obj)
   }

   const editHandler = (e) =>  {
      e.preventDefault()
      dispatch(updateNews(formNews, news.id))
      setShow(false)
   }

   return(
      <>
      <Button variant="secondary" onClick={handleShow}>
         { buttonTxt }
      </Button>

      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            
            <Modal.Title>{ name }</Modal.Title>
               </Modal.Header>
                  <Modal.Body>

         <Form className="container my-5" onSubmit={editHandler}>
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

            {// eslint-disable-next-line
               category.map(el => {
                  if(el.id === news.Category.id){// eslint-disable-next-line
                     return <option key={el.id} value={news.Category.id}>{el.name}</option>
                  } 
               })
            }

            {// eslint-disable-next-line
               category.map(el => {
                  if(el.id !== news.Category.id){// eslint-disable-next-line
                     return <option key={el.id} value={el.id}>{el.name}</option>
                  } 
               })
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
      <Button variant="primary" type="submit" style={{ margin: '20px' }}>
         Update
      </Button>
      </Form>

         </Modal.Body>
            <Modal.Footer>
         </Modal.Footer>
      </Modal>
   </>
   )
}


export default CustomModalEdit