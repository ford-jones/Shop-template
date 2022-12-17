import React from 'react'

export default function shopPopup({ foundProduct }) {
  return (
    <>
      <div className="popup">
        <h3>{foundProduct.unique_name} was added to your cart!</h3>
      </div>
    </>
  )
}
