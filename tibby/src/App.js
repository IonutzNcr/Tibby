// import logo from './logo.svg';

// src={logo}

import './App.css';
import react, {useState} from "react";
import { Container } from "./components/Container";
import { Modal } from "./components/Modal";




function App() {
  const [modalIsOpen, setModal] = useState(false)

  const openModal = () =>{
    console.log("is good")
    if(modalIsOpen){
      setModal(false)
    } else {
      setModal(true)
    }
  }

  return (
    <div className="App">
      <Container event = {openModal} />
      {
        modalIsOpen && 
        <Modal />
      }
    
    </div>
  );
}

export default App;
