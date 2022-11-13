import React, { useState } from 'react'

export default function Counter({ cartItem }) {
  const [count, setCount] = useState(cartItem.quantity)

  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(() => count - 1)
      console.log('id hit!: ', cartItem.id)
    } else if (name === 'increment') {
      setCount(() => count + 1)
      console.log('id hit!: ', cartItem.id)
    }
    const fetchItems = localStorage.getItem('cartItem')
    const cartItems = JSON.parse(fetchItems)

    const keepSafe = cartItems.filter((z) => cartItem.id != z.id)
    console.log('Keep Safe: ', keepSafe)

    const itemMatch = cartItems.find((x) => cartItem.id === x.id)
    console.log('Match Found: ', itemMatch)

    const newItem = new Object({ ...itemMatch, quantity: count })
    console.log('new item: ', newItem)

    const newArray = [...keepSafe, newItem].sort((a, b) => a.id - b.id)
    console.log('new array: ', newArray)

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
