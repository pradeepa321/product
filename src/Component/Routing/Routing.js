import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Slide from '../Slide1/Slide'
import Product from '../Product/Product'
import Printer from '../Printer/Printer'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Slide/>}></Route>
            <Route path="/headphone" element={<Product />}></Route>
            <Route path="/printer" element={<Printer />}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Routing