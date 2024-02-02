import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Discount from '../Homepage/Discount'
import Cards from '../Homepage/Cards'
import Slider from '../Homepage/Slider'
import NewArrivals from '../Homepage/NewArrivals'
import BestSales from '../Homepage/BestSales'
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
              </Routes>
          </BrowserRouter>
  )
}
