import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

import Nav from './Nav'

export default function ShopItem() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  // function findJewelery() {
  const name = useParams()

  let jewelName = name
  let foundJewelery = jewelery.find((x) => {
    console.log('jewelName data: ', jewelName.name, x, x.name)
    return x.name == jewelName.name
  })
  // }

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  // const foundJewelery = findJewelery()
  // console.log(foundJewelery)

  return (
    <>
      <div className="ShopItem">
        <h1 className="header">Shop</h1>
        <Nav />
        <img src={`/images/grill${foundJewelery.id}.png`} alt="jewelPhoto" />
        <p>{foundJewelery.name}</p>
        <p>{foundJewelery.materials}</p>
        <p>{foundJewelery.description}</p>
        <p>{foundJewelery.weight}</p>
        <p>{foundJewelery.price}</p>
      </div>
    </>
  )
}
