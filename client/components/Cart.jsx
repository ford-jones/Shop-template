import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Nav from './subcomponents/Nav'
import Loader from './subcomponents/Loader'
import CartEmpty from './subcomponents/CartEmpty'

export default function Cart() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(1)
  const navigate = useNavigate()

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  function handleCheckout(e) {
    e.preventDefault()
    navigate('/checkout')
  }

  function handleCart(e) {
    e.preventDefault()

    let deleteItem = cart.filter((x) => {
      return x.id != e.target.id
    })
    localStorage.removeItem('cartItem')
    let newCartString = JSON.stringify(deleteItem)
    let cartStorage = localStorage.setItem('cartItem', newCartString)
    return cartStorage
  }

  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(count - 1)
    } else if (name === 'increment') {
      setCount(count + 1)
    }
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
    console.log('total: ', total)
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
                      <span>
                        Quantity:
                        <button
                          name="decrement"
                          type="submit"
                          className="minusQuantity"
                          onClick={handleQuantity}
                        >
                          -
                        </button>
                        <p>{count}</p>
                        <button
                          name="increment"
                          type="submit"
                          className="addQuantity"
                          onClick={handleQuantity}
                        >
                          +
                        </button>
                      </span>
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
