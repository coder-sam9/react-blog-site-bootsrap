import { useState } from "react";
import Blogs from "./components/Blogs";
import InputModal from "./components/UI/InputModal";
import { Container,Button } from "react-bootstrap";
import BlogProvider from "./store/BlogProvider";



function App() {
const [show,setShow]=useState(false);
const [edit,setEdit]=useState({isEdit:false,item:{}})
const openModal=()=>{
  setShow(true);
}
const closeModal=()=>{
  setShow(false);
}
const onEditHandler=(item)=>{
  console.log('is edit handler executed',item)
  setEdit({
    isEdit:true,
    item:item
  })
  openModal();

}
  return (
    <BlogProvider>
      <header className="App-header">
      <Container className='text-center border-bottom p-3 border-secondary mb-3'>
        <h1 className='text-dark'>
            Blog Website
        </h1>
        <Button variant='secondary' onClick={openModal}
        >
            Add Blog Post
        </Button>
    </Container>
      </header>
      <main>
        <InputModal showModal={show} onClose={closeModal} isEdit={edit.isEdit} item={edit.item} id={edit._id}/>
        <Blogs onEdit={onEditHandler}/>
      </main>
    </BlogProvider>

  );
}

export default App;
