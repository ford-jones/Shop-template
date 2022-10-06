import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
        <h1> STGMATA </h1>
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
