import React from 'react'

import Counter from './Counter'

export default function CartItems() {
  const fetchCart = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchCart)

  function handleCart(e) {
    e.preventDefault()

    let deleteItem = cartItems.filter((x) => {
      return x.id != e.target.id
    })

    localStorage.removeItem('cartItem')
    let newCartString = JSON.stringify(deleteItem)
    localStorage.setItem('cartItem', newCartString)
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
          <Counter />
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
