import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function CartEmpty() {
  return (
    <>
      <p>Uh oh!</p>
      <p>Looks like your cart is empty!</p>
      <br></br>
      <p>
        If you would like to browse products click
        <Link to="/shop">here!</Link>
        <Outlet />
      </p>
    </>
  )
}
