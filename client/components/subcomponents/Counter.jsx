import React, { useState } from 'react'

//  Get a singular object to work on seperate from the rest of the cart with .find(x) where cartItem.id = x.id
//  Get everything else in the cart other than ^^^ with a .filter() and keep a shallow copy
//  The quantity value of the singular object should become equal to the count state onClick
//  Make a new variable equal to the singular object pushed into the shallow copy of the rest of the cart
//  Delete cartItem from LS
//  Set a new cartItem equal to the newly made variable, it will be fetched in the cart and so fourth

export default function Counter({ cartItem }) {
  const [count, setCount] = useState(cartItem.quantity)

  // let item = new Array([cartItem])
  // let sCopy = [...item]
  // console.log(sCopy)

  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(count - 1)
      console.log('id hit!: ', cartItem.id)
    } else if (name === 'increment') {
      setCount(count + 1)
      console.log('id hit!: ', cartItem.id)
    }
    const fetchItems = localStorage.getItem('cartItem')
    const cartItems = JSON.parse(fetchItems)

    const keepSafe = cartItems.filter((z) => cartItem.id != z.id)
    console.log('Keep Safe: ', keepSafe)

    let itemMatch = cartItems.find((x) => cartItem.id === x.id)
    console.log('Match Found: ', itemMatch)

    let newItem = new Object({ ...itemMatch, quantity: count })
    console.log('Object keys: ', newItem)
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
