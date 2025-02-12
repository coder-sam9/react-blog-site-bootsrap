import React, { useState } from 'react'
import { Modal,Button, Form } from 'react-bootstrap'
import AddBlogsCall from '../../api/AddBlogCall';
import EditBlogCall from '../../api/EditBlogCall';
import baseUrl from '../../api/BaseUrl';

function InputModal({showModal,isEdit,item,onClose}) {
    const [blogData,setBlogData]=useState({
        id:isEdit?item.id:'',
        title:isEdit?item.title:'',
        description:isEdit?item.description:'',
        imageUrl:isEdit?item.imageUrl:''
    });
   const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setBlogData(prevState=>{
            return {
                ...prevState,[name]:value
            }
        })
    };
    const handleSubmit=async (e)=>{
      console.log("thiss is save isedit is",isEdit);
      console.log("thiss is save item is",blogData);
        e.preventDefault();
        try {
          const response = await fetch(`${baseUrl}/blogs`, { // Ensure correct API endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title:blogData.title,
              description:blogData.description,
              imageUrl:blogData.imageUrl,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log("Blog added successfully:", data);
          return data;
        } catch (error) {
          console.error("Error adding blog:", error);
        }finally{
        onClose()
        
        }
        

    }
    
  return (
      <Modal show={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Blog</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
             <Form.Group  className="mb-3">
                <Form.Label>Image Url</Form.Label>
                <Form.Control type='text' placeholder='Enter Image Address' name='imageUrl' value={blogData.imageUrl} onChange={handleChange} />
            </Form.Group>
             <Form.Group  className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Enter Title' name='title' value={blogData.title} onChange={handleChange} />
            </Form.Group>
             <Form.Group  className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder='Enter Description' name='description' value={blogData.description} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>onClose()}>Close</Button>
          <Button variant="primary" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal >
  )
}

export default InputModal