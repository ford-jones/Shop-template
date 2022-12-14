import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchProducts, selectProducts } from '../../slices/products'

import Nav from './Nav'
import ShopPopup from './ShopPopup'

export default function ShopItem() {
  const [cart, setCart] = useState([])
  const [popup, setPopup] = useState(false)
  const product = useSelector(selectProducts)
  const dispatch = useDispatch()

  const name = useParams()
  let productName = name
  let whichProduct = product.find((x) => {
    return x.name == productName.name
  })

  let foundProduct = new Object({ ...whichProduct, quantity: 1 })

  function handleSubmit(e) {
    // console.log('hit!')
    e.preventDefault()
    const cartData = [...cart, foundProduct]
    const clickedItem = JSON.stringify(cartData)
    localStorage.setItem('cartItem', clickedItem)

    setPopup(true)

    setTimeout(() => {
      setPopup(false)
    }, 2500)
  }

  console.log('cart: ', cart)
  useEffect(async () => {
    await dispatch(fetchProducts())

    console.log('hit')
    const fetchCart = localStorage.getItem('cartItem')
    const cartItems = JSON.parse(fetchCart)
    setCart(cartItems ? cartItems : [])
  }, [])

  return (
    <>
      {popup ? <ShopPopup foundProduct={foundProduct} /> : null}

      <div className="ShopItem">
        <h1 className="header">Shop</h1>
        <Nav />
        <img
          className="shopItemImage"
          src={`/images/product${foundProduct.id}.png`}
          alt="productPhoto"
        />
        <div className="shopItemText">
          <p>{foundProduct.name}</p>
          <p>{foundProduct.materials}</p>
          <p>{foundProduct.description}</p>
          <p>{foundProduct.weight}</p>
          <p>{`$${foundProduct.price}`}</p>
          <form className="addToCart">
            <button type="submit" className="cartButton" onClick={handleSubmit}>
              add to cart
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
