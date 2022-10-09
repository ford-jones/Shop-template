import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../slices/jewelery'

export default function Shop() {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  return (
    <>
      <ul>
        {jewelery.map((jewel) => (
          <li key={jewel}>{jewel}</li>
        ))}
      </ul>
    </>
  )
}
