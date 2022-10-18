import React, { useEffect, useState } from 'react'
import { useParams, redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

import Nav from './Nav'

// Write a function that takes the data of the page as input when add to cart is clicked
// The data needs to be held in memory somewhere so that it is not lost when the user navigates away
// The data needs to be accessible from the memory so it can added to, deleted, updated and fetched
// The data will be pulled down and displayed in the cart component

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

  function addToCart() {
    const cartData = [...cart, foundJewelery]
    const clickedItem = JSON.stringify(cartData)
    console.log('cartData: ', cartData)
    console.log('clickedItem: ', clickedItem)

    return localStorage.setItem('cartItem', clickedItem)
  }

  function handleSubmit(e) {
    console.log('hit!')
    // const navigate = useNavigate()
    e.preventDefault()
    try {
      setCart(addToCart())

      redirect('/cart')
    } catch (err) {
      console.error(err)
    }
  }
  console.log('cart: ', cart)
  useEffect(async () => {
    await dispatch(fetchJewelery())
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
          <p>{foundJewelery.price}</p>
          <form className="addToCart">
            {/* <Link to="/cart"> */}
            <button type="submit" className="cartButton" onClick={handleSubmit}>
              add to cart
            </button>
            {/* </Link>
            <Outlet /> */}
          </form>
        </div>
      </div>
    </>
  )
}
