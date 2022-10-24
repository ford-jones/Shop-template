import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import Nav from './Nav'
import Loader from './Loader'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  const initialValue = 0

  const total = cart
    .map((cartItem) => {
      return cartItem.price
    })
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    )
  console.log('total: ', total)

  function handleCheckout(e) {
    e.preventDefault()
  }

  function handleCart(e) {
    e.preventDefault()

    // setLoading(true)

    let deletedItem = cart.filter((x) => {
      return x.id != e.target.id
    })

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
                  <p>{`$${cartItem.price}`}</p>
                  <section>
                    <form className="quantity">
                      <p>Quantity: </p>
                      <button type="submit" className="minusQuantity">
                        -
                      </button>
                      <p>1</p>
                      <button type="submit" className="addQuantity">
                        +
                      </button>
                    </form>
                  </section>
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
          <section className="checkout">
            <p>{`Total: $${total}`}</p>
            <form className="goToCheckout">
              <button
                type="submit"
                className="checkoutButton"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </form>
          </section>
        </div>
      </>
    )
  }
}
