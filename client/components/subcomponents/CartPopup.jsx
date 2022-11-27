import React from 'react'

export default function cartPopup({ cartItems, setPopup }) {
  function handleYes() {
    setPopup(false)
  }

  function handleNo() {
    setPopup(false)
  }

  return (
    <>
      <div className="popup">
        <h3>remove item from your cart?</h3>
        <form>
          <button type="submit" onClick={handleYes}>
            Yes
          </button>
          <button type="submit" onClick={handleNo}>
            No
          </button>
        </form>
      </div>
    </>
  )
}
