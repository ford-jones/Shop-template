import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Nav from './Nav'
import Loader from './Loader'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  function handleCheckout(e) {
    e.preventDefault()
  }

  function handleCart(e) {
    e.preventDefault()
    let deletedItem = cart.filter((x) => {
      return x.id != e.target.id
    })
    console.log('new cart array: ', deletedItem)

    localStorage.removeItem('cartItem')
    let newCartString = JSON.stringify(deletedItem)
    return localStorage.setItem('cartItem', newCartString)
  }

  useEffect(() => {
    setTimeout(() => {
      setCart(cartItems)
      setLoading(false)
    }, 3000)
  }, [cart])
  // console.log('cart: ', cart, typeof cart)

  if (cart.length < 1) {
    return (
      <>
        <div className="cart">
          <h1 className="header">Cart</h1>
          <Nav />
          {loading ? (
            <Loader />
          ) : (
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
          )}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="cart">
          <h1 className="header">Cart</h1>
          <Nav />
          {loading ? (
            <Loader />
          ) : (
            cart.map((cartItem) => {
              return (
                <>
                  <img
                    className="cartItemImage"
                    src={`/images/grill${cartItem.id}.png`}
                    alt="jewelPhoto"
                  />
                  <p>{cartItem.name}</p>
                  <p>{cartItem.material}</p>
                  <p>{cartItem.price}</p>
                  <form className="clearCart">
                    <button
                      id={cartItem.id}
                      type="submit"
                      className="removeCartItem"
                      onClick={handleCart}
                    >
                      remove from cart
                    </button>
                  </form>
                  <div className="pageBreak"></div>
                </>
              )
            })
          )}
          <form className="checkout">
            <button
              type="submit"
              className="goToCheckout"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </form>
        </div>
      </>
    )
  }
}
