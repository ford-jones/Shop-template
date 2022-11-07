import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Nav from './subcomponents/Nav'
import Loader from './subcomponents/Loader'
import CartEmpty from './subcomponents/CartEmpty'
import CartItems from './subcomponents/CartItems'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  function handleCheckout(e) {
    e.preventDefault()
    navigate('/checkout')
  }

  useEffect(() => {
    setInterval(() => {
      setCart(cartItems)
      setLoading(false) //  try putting this in it's own setTimeout(), it doesn't need calling more than once
    }, 3000)
  }, [cart])

  if (cartItems <= 0) {
    localStorage.removeItem('cartItem')

    return (
      <>
        <div className="cart">
          <h1 className="header">Cart</h1>
          <Nav />
          {loading ? <Loader /> : <CartEmpty />}
        </div>
      </>
    )
  } else {
    const initTotal = 0
    const total = cart
      .map((cartItem) => {
        // make a variable that is = to cartItem.price * cartItem.quantity
        return cartItem.price * cartItem.quantity
      })
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initTotal
      )
    return (
      <>
        <div className="cart">
          <h1 className="header">Cart</h1>
          <Nav />
          {loading ? <Loader /> : <CartItems />}

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
