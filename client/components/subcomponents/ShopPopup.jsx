import React from 'react'

export default function shopPopup({ foundJewelery }) {
  return (
    <>
      <div className="popup">
        <h3>{foundJewelery.name} was added to your cart!</h3>
      </div>
    </>
  )
}
