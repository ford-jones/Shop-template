import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Loader from './Loader'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)
  // const userCart = [...cart, cartItems]

  function handleClick(e) {
    e.preventDefault()
  }

  useEffect(() => {
    setTimeout(() => {
      // setCart(userCart)
      setCart(cartItems)
      setLoading(false)
    }, 3000)
  }, [cart])
  console.log('cart: ', cart, typeof cart)

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
                <div className="pageBreak"></div>
              </>
            )
          })
        )}
        <form className="checkout">
          <button type="submit" className="goToCheckout" onClick={handleClick}>
            Checkout
          </button>
        </form>
      </div>
    </>
  )
}
