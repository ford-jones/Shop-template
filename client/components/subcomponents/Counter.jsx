import React, { useState } from 'react'

export default function Counter({ cartItem }) {
  const [count, setCount] = useState(cartItem.quantity)

  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(() => count - 1)
    } else if (name === 'increment') {
      setCount(() => count + 1)
    }

    const fetchItems = localStorage.getItem('cartItem')
    const cartItems = JSON.parse(fetchItems)

    const keepSafe = cartItems.filter((z) => cartItem.id != z.id)
    const itemMatch = cartItems.find((x) => cartItem.id === x.id)
    const newItem = new Object({ ...itemMatch, quantity: count })
    const newArray = [...keepSafe, newItem].sort((a, b) => a.id - b.id)

    localStorage.removeItem('cartItem')
    const updateQuantity = JSON.stringify(newArray)
    localStorage.setItem('cartItem', updateQuantity)
  }
  return (
    <>
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
    </>
  )
}
