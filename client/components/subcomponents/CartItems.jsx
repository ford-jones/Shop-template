import React, { useState } from 'react'

export default function CartItems() {
  const [count, setCount] = useState(1)

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  const quantities = cartItems.map((cartItem) => {
    return cartItem.quantity
  })
  console.log('quantities: ', quantities)

  function handleCart(e) {
    e.preventDefault()

    let deleteItem = cartItems.filter((x) => {
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

  return cartItems.map((cartItem) => {
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
              <p>{cartItem.quantity}</p>
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
}
