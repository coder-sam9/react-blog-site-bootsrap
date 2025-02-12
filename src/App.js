import { use, useState } from "react";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import InputModal from "./components/UI/InputModal";
import { Container,Button } from "react-bootstrap";



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
  console.log(item)
  openModal();

}
  return (
    <div className="App">
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
        <InputModal showModal={show} onClose={closeModal} isEdit={edit.isEdit} item={edit.item}/>
        <Blogs onEdit={onEditHandler}/>
      </main>
    </div>
  );
}

export default App;
