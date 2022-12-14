import React, { useState } from 'react'

import Counter from './Counter'
import Total from './Total'

import CartPopup from './CartPopup'

export default function CartItems({ cart }) {
  const [popup, setPopup] = useState(false)
  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart).sort((a, b) => a.id - b.id)

  function handleCart(e) {
    e.preventDefault()
    let deleteItem = cartItems.filter((x) => {
      return x.id != e.target.id
    })

    localStorage.removeItem('cartItem')
    let newCartString = JSON.stringify(deleteItem)
    localStorage.setItem('cartItem', newCartString)

    setPopup(true)
    setTimeout(() => {
      setPopup(false)
    }, 2500)
  }

  return (
    <>
      {cartItems.map((cartItem) => {
        return (
          <>
            {popup ? <CartPopup /> : null}
            <img
              className="cartItemImage"
              src={`/images/product${cartItem.id}.png`}
              alt="productPhoto"
            />
            <p>{cartItem.name}</p>
            <p>{cartItem.material}</p>
            <p>{`$${cartItem.price}`}</p>
            <section>
              <Counter cartItem={cartItem} />
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
      })}
      <Total cart={cart} />
    </>
  )
}
