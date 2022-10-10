import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Nav from './Nav'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

export default function Shop() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  return (
    <>
      <h1 className="header">Shop</h1>
      <Nav />
      {jewelery.map((jewel) => (
        <>
          <div className="shopItem">
            <ul key={jewel.id}>
              <li>{jewel.name}</li>
              <li>{jewel.materials}</li>
              <li>{jewel.description}</li>
              <li>{jewel.weight}</li>
              <li>{jewel.price}</li>
            </ul>
          </div>
        </>
      ))}
    </>
  )
}
