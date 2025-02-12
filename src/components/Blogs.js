import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import GetBlogsCall from '../api/GetBlogsCall'
import { Container } from 'react-bootstrap';
import EditBlogCall from '../api/EditBlogCall';

function Blogs({onEdit}) {
    const response=[
        {
          id:1,
          title: "Nature's Beauty",
          imageUrl: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
          description: "A breathtaking view of nature with lush green trees and a serene lake."
        },
        {
          id:2,
          title: "Cityscape at Night",
          imageUrl: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg",
          description: "The vibrant lights of a bustling city skyline during the night."
        },
        {
          id:3,
          title: "Mountain Adventure",
          imageUrl: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
          description: "Exploring the majestic mountains with snow-capped peaks and clear skies."
        },
        {
          id:4,
          title: "Sunset Over the Ocean",
          imageUrl: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg",
          description: "A stunning sunset over the calm ocean waves, perfect for relaxation."
        },
        {
          id:5,
          title: "Cute Puppy",
          imageUrl: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
          description: "An adorable puppy playing in the grass, bringing joy to everyone."
        }
      ];
    const [blogs,setBlogs]=useState(response);
    const getBlogs=async()=>{
        const response=await GetBlogsCall();
        setBlogs(response);
    }
    // useEffect(getBlogs,[])
  return (

    <Container>

    {
        blogs.map((item,ind)=>{
            return <BlogItem item={item} num={ind+1} toEdit={(item)=>onEdit(item)}/>;
        })}
    
    </Container>
  )
}

export default Blogs