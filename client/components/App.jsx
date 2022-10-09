import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Nav from './Nav'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

function App() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  return (
    <>
      <div className="app">
        <Nav />
        <ul>
          {jewelery.map((jewel) => (
            <li key={jewel}>{jewel}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
