import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(1)
  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(count - 1)
    } else if (name === 'increment') {
      setCount(count + 1)
    } else {
      return null
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
