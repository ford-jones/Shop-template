import React, { useEffect } from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

import Nav from './Nav'

export default function ShopItem() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  const name = useParams()
  let jewelName = name
  let foundJewelery = jewelery.find((x) => {
    // console.log('jewelName data: ', jewelName, jewelName.name, x, x.name)
    return x.name == jewelName.name
  })

  // function handleSubmit(e) {
  //   console.log('hit!')
  //   const navigate = useNavigate()
  //   e.preventDefault()
  //   .then(navigate('/cart'))
  //   .catch((err) => {
  //   console.error(err)
  //   })
  //   // return redirect('/cart')
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  // }

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
            <Link to="/cart">
              <button
                type="submit"
                className="cartButton"
                // onClick={handleSubmit}
              >
                add to cart
              </button>
            </Link>
            <Outlet />
          </form>
        </div>
      </div>
    </>
  )
}
