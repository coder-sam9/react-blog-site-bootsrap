import React from 'react'
import { Container, Image,Card,Button } from 'react-bootstrap'
import DeleteBlogCall from '../api/DeleteBlogCall'

function BlogItem({item,num,toEdit}) {
  return (
    <Container>
        <Card
  bg="light"
  key={item.title} 
  style={{ width: "18rem" }}
  className="mb-2"
>
  <Card.Header>{`Blog ${num}`}</Card.Header> 
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Image src={item.imageUrl} alt={item.title} fluid />
    <Card.Text>{item.description}</Card.Text>
    <div style={{display:'flex',justifyContent:'space-around'}}>

    <Button variant="info" onClick={()=>toEdit(item)}>Edit</Button>
          <Button variant="danger" onClick={()=>DeleteBlogCall(item.id)}>Delete</Button>
    </div>
  </Card.Body>
</Card>
    </Container>
  )
}

export default BlogItem