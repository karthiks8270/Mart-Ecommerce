import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Discount from '../Homepage/Discount'
import Cards from '../Homepage/Cards'
import Slider from '../Homepage/Slider'
import NewArrivals from '../Homepage/NewArrivals'
import BestSales from '../Homepage/BestSales'
import Background from '../Shoppage/Background'
import ProductDetail from '../Productpage/ProductDetail'
import Cart from '../Cartpage/Cart'
export default function RoutingAll() {
  return (
    
          <BrowserRouter>
              <Routes>
                <Route path='/' 
                element={
                <>
                            <Slider/>
                            <Cards/>
                            <Discount/>
                            <NewArrivals/>
                            <BestSales/>
                </>
              }/>
              <Route path='/shop'
              element ={
                <>
                     <Background/>
                </>
              }/>
              <Route path="/product/:id" element ={ <>
                      <ProductDetail/>
              </>}/>
              <Route path='/cart'
              element ={
                <>
                      <Cart/>
                </>
              }/>
              </Routes>
          </BrowserRouter>
  )
}
