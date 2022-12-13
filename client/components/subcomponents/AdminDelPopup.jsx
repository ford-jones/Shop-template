import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { fetchJewelery, selectJewelery } from '../../slices/jewelery'

export default function adminDelPopup({ setPopup }) {
  const jewelery = useSelector(selectJewelery)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault()
    setPopup(false)
  }

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  return (
    <>
      <div className="popup">
        {jewelery.map((jewel) => (
          <>
            <img
              className="productImage"
              src={`/images/grill${jewel.id}.png`}
              alt="jewelPhoto"
            />
            <p>{jewel.name}</p>
            <p>{`$${jewel.price}`}</p>
          </>
        ))}
        <form>
          <button type="submit" onClick={handleClick}>
            close popup
          </button>
        </form>
      </div>
    </>
  )
}
