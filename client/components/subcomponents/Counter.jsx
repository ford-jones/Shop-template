import React, { useState } from 'react'

//  need a function that finds which cartItem the count is associated to
//  needs to update the cartItem.quantity to = the cart.state by deleting and setting a new LS

// import { useSelector } from 'react-redux'
// import { selectJewelery } from '../../slices/jewelery'

export default function Counter({ id }) {
  // const jewelery = useSelector(selectJewelery)
  // const jewelArr = jewelery.map((jewel) => jewel)
  // console.log('global state: ', jewelArr)

  // const fetchCart = localStorage.getItem('cartItem')
  // const cartItems = JSON.parse(fetchCart)
  // // console.log('local storage: ', cartItems)

  // const test = cartItems.find((cartItem) => cartItem.id === id)
  // console.log('test props: ', cartItem)

  //  count initState should be the quantity value of an item in the cart object
  const [count, setCount] = useState(1)

  function handleQuantity(e) {
    e.preventDefault()
    const name = e.target.name

    if (name === 'decrement') {
      setCount(count - 1)
      console.log('id hit!: ', id)
    } else if (name === 'increment') {
      setCount(count + 1)
      console.log('id hit!: ', id)
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
