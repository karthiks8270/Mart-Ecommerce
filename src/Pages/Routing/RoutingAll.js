import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Discount from '../Homepage/Discount'
import Cards from '../Homepage/Cards'
import Slider from '../Homepage/Slider'
import NewArrivals from '../Homepage/NewArrivals'
import BestSales from '../Homepage/BestSales'
import Background from '../Shoppage/Background'
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
              </Routes>
          </BrowserRouter>
  )
}
