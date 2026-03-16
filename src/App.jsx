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
import AdminLogin from './assets/components/AdminLogin'
import AdminDashboard from './assets/components/AdminDashbord'
import AllProducts from './assets/components/Allproducts'
import AddProduct from './assets/components/Addproduct'
import Sidebar from './assets/components/Sidebar'



function App() {
  return (
   <>
   
   <BrowserRouter>
   <Header/>
   <Routes>
    {/* //Normal Routing */}
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>

    {/* //Nested Routing  */}
    <Route path='/admin' element={<Sidebar/>}>
    <Route index element={<AdminDashboard/>}/>
    <Route path='/admin/addproduct' element={<AddProduct/>}/>
    <Route path='/admin/addproduct/:id' element={<AddProduct/>}/>
    <Route path='/admin/allproduct' element={<AllProducts/>}/>
    </Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   
   </>
  )
}

export default App