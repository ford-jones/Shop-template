import React, { useState } from 'react'

export default function CartItems() {
  // const [count, setCount] = useState(1)

  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  // cartItems.map(() => {
  //   const [count, setCount] = useState(cartItems.quantity)
  // })

  return cartItems.map((cartItem) => {
    const [count, setCount] = useState(1)

    function handleQuantity(e) {
      e.preventDefault()
      const name = e.target.name

      if (name === 'decrement') {
        setCount(count - 1)
        // setCount(count - 1)
      } else if (name === 'increment') {
        setCount(count + 1)
        // setCount(count + 1)
      }
    }
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
}
