
// import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CreateCards from './components/CreateCards';
import HomeAdmin from './components/HomeAdmin';
import Cards from './components/Cards';
import BestSells from './components/BestSells';
function App() {
  
   
  
  return (
    
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contactus" element={<ContactUs/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/createaccount" element={<CreateAccount/>}></Route>
            <Route path="/CreateCards" element={<CreateCards/>}></Route>
            <Route path="/HomeAdmin" element={<HomeAdmin/>}></Route>
            <Route path="/Pizza" element={<Cards/>}></Route>
            <Route path="/bestSells" element={<BestSells/>}></Route>


           
           
          </Routes>
          <ToastContainer theme='dark'/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
