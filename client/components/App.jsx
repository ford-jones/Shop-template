import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  )
}

export default App
