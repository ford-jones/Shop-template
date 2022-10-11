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

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   console.log('hit')
  //   dispatch(navigate(`/shop/${id}`))
  //   // return (
  //   //   <>
  //   //     <div className="popUp">
  //   //       <p>yes</p>
  //   //     </div>
  //   //   </>
  //   // )
  // }

  return (
    <>
      <h1 className="header">Shop</h1>
      <Nav />
      {jewelery.map((jewel) => (
        <>
          <Link to={`/shop/${jewel.name}`}>
            {/* <div className="shopItem" onClick={handleSubmit}> */}
            <ul key={jewel.id}>
              <img src={`/images/grill${jewel.id}.png`} alt="jewelPhoto" />
              <li>{jewel.name}</li>
              <li>{jewel.materials}</li>
              <li>{jewel.description}</li>
              <li>{jewel.weight}</li>
              <li>{jewel.price}</li>
            </ul>
            {/* </div> */}
          </Link>
          <Outlet />
        </>
      ))}
    </>
  )
}
