import React, { useEffect, useState } from 'react'

export default function Total({ cart }) {
  const [total, setTotal] = useState(0)

  const initTotal = 0
  const findPrice = cart.map((cartItem) => {
    return cartItem.price * cartItem.quantity
  })
  const findTotal = findPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initTotal
  )
  useEffect(() => {
    setTimeout(() => {
      setTotal(findTotal)
    }, 3000)
  }, [cart, total])

  console.log('total: ', total)

  return (
    <>
      <p>{`Total: $${total}`}</p>
    </>
  )
}
