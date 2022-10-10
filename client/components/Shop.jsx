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

  function handleClick(event) {
    event.preventDefault()
    console.log('hit')
  }

  return (
    <>
      <h1 className="header">Shop</h1>
      <Nav />
      {jewelery.map((jewel) => (
        <>
          <div className="shopItem" onClick={handleClick}>
            <ul key={jewel.id}>
              <img src={`/images/grill${jewel.id}.png`} alt="jewelPhoto" />
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
// process.env.PUBLIC_URL + `/grill${jewel.id}.png`
