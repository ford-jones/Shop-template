import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Shop from './Shop'
import ShopItem from './subcomponents/ShopItem'
import Cart from './Cart'
import Checkout from './Checkout'
import About from './About'
import Faqs from './Faqs'
import Contact from './Contact'
import AdminHome from './AdminHome'
import AdminInquiries from './AdminInquiries'
import AdminProducts from './AdminProducts'
import AdminOrders from './AdminOrders'

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:name" element={<ShopItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/admin/inquiries" element={<AdminInquiries />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
        </Routes>
      </div>
    </>
  )
}

export default App
