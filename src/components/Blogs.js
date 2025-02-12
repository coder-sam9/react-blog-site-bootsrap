import React, { useContext } from 'react'
import BlogItem from './BlogItem'
import { Container } from 'react-bootstrap';
import BlogContext from '../store/blog-context';

function Blogs({onEdit}) {
    
  const {blogs}=useContext(BlogContext);
  return (

    <Container>

    {
        blogs.map((item,ind)=>{
            return <BlogItem item={item} num={ind+1} toEdit={(item)=>onEdit(item)} id={item._id}/>;
        })}
    
    </Container>
  )
}

export default Blogs