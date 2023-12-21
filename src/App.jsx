import React, { useState } from 'react';
import styles from'./App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Sweets from './components/Sweets';
import Promotion from './components/Promotion';
import Login from './components/Login';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Data from './components/Data';
import ShippingPolicy from './components/ShippingPolicy';
import RefundPolicy from './components/RefundPolicy';
import PaymentPolicy from './components/PaymentPolicy';
import About from './components/About'
import Contact from './components/Contact';
import Dataa from './components/Dataa'

const App = () => {
  
const {sweetItem} = Data;
// const {cartItem} = Dataa;
const [cartItem,setcartItem] = useState([]);

  return (
    <div className={styles.App}>
<Router>
<Routes>
        <Route exact path="/" element={
        <React.Fragment>
          <Navbar/>
          <Hero/>
          <Features/>
          <Sweets sweetItem={sweetItem} />
       
          <Promotion/>
          <Footer></Footer>
        </React.Fragment>
        }/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/Cart' element={<Cart cartItem={cartItem} />}/>
        <Route exact path='/ShippingPolicy' element={<ShippingPolicy/>}/>
        <Route exact path='/RefundPolicy' element={<RefundPolicy/>}/>
        <Route exact path='/PaymentPolicy' element={<PaymentPolicy/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
      </Routes>
      </Router>
    </div>
      
    
  )
}

export default App
