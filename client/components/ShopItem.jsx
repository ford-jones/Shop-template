import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

import Nav from './Nav'

export default function ShopItem() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  function findJewelery() {
    const name = useParams()

    let jewelName = String(name)
    jewelery.find((x) => x.name == jewelName)
  }

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  const foundJewelery = findJewelery()
  console.log(foundJewelery)

  return (
    <>
      <div className="ShopItem">
        <Nav />
        <p>test</p>
        {/* <p>{foundJewelery.name}</p> */}
      </div>
    </>
  )
}
