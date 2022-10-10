import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Nav from './Nav'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

export default function Shop() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  function handleClick(event) {
    event.preventDefault()
    dispatch(navigate('/'))
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
