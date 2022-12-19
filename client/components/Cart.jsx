import React, { useMemo, useState } from 'react'

import Nav from './subcomponents/Nav'
import Loader from './subcomponents/Loader'
import CartEmpty from './subcomponents/CartEmpty'
import CartItems from './subcomponents/CartItems'
import PayButton from './subcomponents/PayButton'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  useMemo(() => {
    setTimeout(() => {
      setCart(cartItems)
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
    return (
      <>
        <div className="cart">
          <h1 className="header">Cart</h1>
          <Nav />
          {loading ? <Loader /> : <CartItems cart={cart} />}

          <section className="checkout">
            <form className="goToCheckout">
              <PayButton cartItems={cartItems} />
            </form>
          </section>
        </div>
      </>
    )
  }
}
