import React from 'react'

export default function adminDelPopup({ setPopup }) {
  function handleClick(e) {
    e.preventDefault()
    setPopup(false)
  }

  return (
    <div className="popup">
      <h3>test</h3>
      <form>
        <button type="submit" onClick={handleClick}>
          close popup
        </button>
      </form>
    </div>
  )
}
