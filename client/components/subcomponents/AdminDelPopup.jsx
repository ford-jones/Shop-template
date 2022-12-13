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

  function handleDelete(e) {
    e.preventDefault()
    console.log('hit')
  }

  useEffect(async () => {
    await dispatch(fetchJewelery())
  }, [])

  return (
    <>
      <div className="delPopup">
        {jewelery.map((jewel) => (
          <>
            <div className="delProduct">
              <img
                className="delProductImage"
                src={`/images/grill${jewel.id}.png`}
                alt="jewelPhoto"
              />
              <p>{jewel.name}</p>
              <form>
                <button type="submit" onClick={handleDelete}>
                  Delete
                </button>
              </form>
            </div>
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
