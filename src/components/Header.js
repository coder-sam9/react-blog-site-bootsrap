import React from 'react'
import { Button, Container } from 'react-bootstrap'


function Header() {
  return (
    <Container className='text-center border-bottom p-3 border-secondary mb-3'>
        <h1 className='text-dark'>
            Blog Website
        </h1>
        <Button variant='secondary'
        >
            Add Blog Post
        </Button>
    </Container>
  )
}

export default Header