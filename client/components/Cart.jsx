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
    setCart(cartItems)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [cartItems])

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
        return cartItem.price
      })
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initTotal
      )
    // console.log('total: ', total)
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
