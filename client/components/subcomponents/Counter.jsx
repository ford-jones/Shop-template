import React, { useState } from 'react'

export default function Counter({ cartItem }) {
  const [count, setCount] = useState(cartItem.quantity)

  const fetchItems = localStorage.getItem('cartItem')
  const cartItems = JSON.parse(fetchItems)

  const keepSafe = cartItems.filter((z) => cartItem.id != z.id)
  const itemMatch = cartItems.find((x) => cartItem.id === x.id)

  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(() => {
        const newItem = new Object({ ...itemMatch, quantity: count - 1 })
        const newArray = [...keepSafe, newItem].sort((a, b) => a.id - b.id)

        localStorage.removeItem('cartItem')
        const updateQuantity = JSON.stringify(newArray)
        localStorage.setItem('cartItem', updateQuantity)
        return count - 1
      })
    } else if (name === 'increment') {
      setCount(() => {
        const newItem = new Object({ ...itemMatch, quantity: count + 1 })
        const newArray = [...keepSafe, newItem].sort((a, b) => a.id - b.id)

        localStorage.removeItem('cartItem')
        const updateQuantity = JSON.stringify(newArray)
        localStorage.setItem('cartItem', updateQuantity)
        return count + 1
      })
    }
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
