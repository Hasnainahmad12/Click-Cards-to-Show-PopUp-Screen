import React from 'react'
import Modal from './Components/Models'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Details from './Components/Details'

const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/Details' element={<Details />}/> */}
        </Routes>
        <Modal />
      </BrowserRouter>
    </div>
  )
}

export default Index