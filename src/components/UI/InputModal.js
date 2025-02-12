import React, { useState,useEffect, useContext } from 'react'
import { Modal,Button, Form } from 'react-bootstrap'
import BlogContext from '../../store/blog-context';

function InputModal({showModal,isEdit,item,onClose,id}) {

  const { addBlog, editBlog, } = useContext(BlogContext);

    const [blogData,setBlogData]=useState({
        title:isEdit?item.title:'',
        description:isEdit?item.description:'',
        imageUrl:isEdit?item.imageUrl:''
    });
    useEffect(() => {
      if (isEdit && item) {
        setBlogData({
          title: item.title || "",
          description: item.description || "",
          imageUrl: item.imageUrl || "",
        });
      }
    }, [isEdit, item])
   const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setBlogData(prevState=>{
            return {
                ...prevState,[name]:value
            }
        })
    };
    const handleAddPost=async (e)=>{
        e.preventDefault();
        try {
         addBlog(blogData)
        } catch (error) {
          console.error("Error adding blog:", error);
        }finally{
        onClose()
        
        }
        

    }
    const handleEditPost=async (e)=>{
        e.preventDefault();
        try {
          
          editBlog(item._id,blogData);
        } catch (error) {
          console.error("Error edit blog:", error);
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
          <Button variant="primary" onClick={isEdit?handleEditPost:handleAddPost}>Save</Button>
        </Modal.Footer>
      </Modal >
  )
}

export default InputModal