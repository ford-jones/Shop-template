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
      <ul>
        {jewelery.map((jewel) => (
          <li key={jewel.id}>{jewel.name}</li>
        ))}
      </ul>
    </>
  )
}
