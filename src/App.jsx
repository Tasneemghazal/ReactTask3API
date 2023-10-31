import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Products from './components/products/Products.jsx'
import Resturant from './components/resturant/Resturant.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/products' element={<Products/>}/>
    <Route path='/resturant' element={<Resturant/>}/>
    </Routes>
   
    </BrowserRouter>
    </>
  )
}

