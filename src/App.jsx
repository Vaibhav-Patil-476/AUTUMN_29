import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Service from './assets/components/Service'

import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

import Login from './assets/components/Login'
import Signup from './assets/components/Signup'
import Contact from './assets/components/Contact'
import Gallery from './assets/components/Gallery'


function App() {
  return (
   <>
   
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

    

   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  )
}

export default App