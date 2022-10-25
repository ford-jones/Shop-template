import React, { useEffect, useState } from 'react'
import { useParams, redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../../slices/jewelery'

import Nav from './Nav'

export default function ShopItem() {
  const [cart, setCart] = useState([])
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  const name = useParams()
  let jewelName = name
  let foundJewelery = jewelery.find((x) => {
    // console.log('jewelName data: ', jewelName, jewelName.name, x, x.name)
    return x.name == jewelName.name
  })
  console.log(foundJewelery)

  function handleSubmit(e) {
    // console.log('hit!')
    e.preventDefault()
    const cartData = [...cart, foundJewelery]
    const clickedItem = JSON.stringify(cartData)
    localStorage.setItem('cartItem', clickedItem)

    redirect('/cart')
  }

  console.log('cart: ', cart)
  useEffect(async () => {
    await dispatch(fetchJewelery())

    console.log('hit')
    const fetchCart = localStorage.getItem('cartItem')
    const cartItems = JSON.parse(fetchCart)
    setCart(cartItems ? cartItems : [])
  }, [])

  return (
    <>
      <div className="ShopItem">
        <h1 className="header">Shop</h1>
        <Nav />
        <img
          className="shopItemImage"
          src={`/images/grill${foundJewelery.id}.png`}
          alt="jewelPhoto"
        />
        <div className="shopItemText">
          <p>{foundJewelery.name}</p>
          <p>{foundJewelery.materials}</p>
          <p>{foundJewelery.description}</p>
          <p>{foundJewelery.weight}</p>
          <p>{`$${foundJewelery.price}`}</p>
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