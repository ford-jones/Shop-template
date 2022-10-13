import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Nav from './Nav'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

export default function Shop() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  return (
    <>
      <h1 className="header">Shop</h1>
      <Nav />
      {jewelery.map((jewel) => (
        <>
          <div className="product">
            <Link to={`/shop/${jewel.name}`}>
              <ul key={jewel.id}>
                <img
                  className="productImage"
                  src={`/images/grill${jewel.id}.png`}
                  alt="jewelPhoto"
                />
                <li>{jewel.name}</li>
                <li>{jewel.price}</li>
              </ul>
            </Link>
            <Outlet />
          </div>
        </>
      ))}
    </>
  )
}
