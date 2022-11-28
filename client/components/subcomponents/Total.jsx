import React, { useEffect, useState } from 'react'

export default function Total({ cart }) {
  const [total, setTotal] = useState(0)

  // function handleClick(e) {
  //   e.preventDefault()
  //   setTimeout(() => {
  const initTotal = 0
  const findPrice = cart.map((cartItem) => {
    return cartItem.price * cartItem.quantity
  })

  // console.log('computed Array: ', findPrice)

  const findTotal = findPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initTotal
  )

  // console.log('total: ', findTotal)
  //   }, 3000)
  // }

  useEffect(() => {
    setTimeout(() => {
      setTotal(findTotal)
    }, 3000)
  }, [findTotal])

  // console.log('total: ', total)

  return (
    <>
      <p>{`Total: $${total}`}</p>
      {/* <form>
        <button type="submit" onClick={handleClick}>
          test
        </button>
      </form> */}
    </>
  )
}
