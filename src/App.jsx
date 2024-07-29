import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./pages/Header";
import About from "./About";
import Contact from "./Contact";
import Review from "./Images/ Clients Review .png"





function App() {
  return (
    <>
      <Header />
     <About/> 
     <Contact/>
    </>
  );
}

export default App;

function feedback(){
  return(
    <>
     <Col lg="3" md="4">
    <img src={Review}></img>
     </Col>

    
    </>

  );
}
