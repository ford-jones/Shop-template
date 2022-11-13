import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Nav from './subcomponents/Nav'
import Loader from './subcomponents/Loader'
import CartEmpty from './subcomponents/CartEmpty'
import CartItems from './subcomponents/CartItems'
import Total from './subcomponents/Total'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  // const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  function handleCheckout(e) {
    e.preventDefault()
    navigate('/checkout')
  }

  useMemo(() => {
    setInterval(() => {
      setCart(cartItems)
      setLoading(false)
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
    // const initTotal = 0
    // const findPrice = cart.map((cartItem) => {
    //   return cartItem.price * cartItem.quantity
    // })
    // const findTotal = findPrice.reduce(
    //   (previousValue, currentValue) => previousValue + currentValue,
    //   initTotal
    // )
    // useMemo(() => {
    //   setInterval(() => {
    //     setTotal(findTotal)
    //   }, 1000)
    // }, [cart])
    // console.log('total: ', total)
    return (
      <>
        <div className="cart">
          <h1 className="header">Cart</h1>
          <Nav />
          {loading ? <Loader /> : <CartItems />}

          <section className="checkout">
            {/* <p>{`Total: $${total}`}</p> */}
            <Total cart={cart} />
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

// if using states, setTotal needs to be called in a handler fn to avoid infinite loops
//  the total algorithm should happen inside the counter component
