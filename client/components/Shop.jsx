import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Nav from './subcomponents/Nav'

import { fetchProducts, selectProducts } from '../slices/products'

export default function Shop() {
  const products = useSelector(selectProducts)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  useEffect(async () => {
    await dispatch(fetchProducts())
  }, [])

  return (
    <>
      <h1 className="header">Shop</h1>
      <Nav />
      {products.map((product) => (
        <>
          <div className="product">
            <Link to={`/shop/${product.name}`}>
              <img
                className="productImage"
                src={`/images/product${product.id}.png`}
                alt="productPhoto"
              />
              <p>{product.name}</p>
              <p>{`$${product.price}`}</p>
            </Link>
            <Outlet />
          </div>
        </>
      ))}
    </>
  )
}
