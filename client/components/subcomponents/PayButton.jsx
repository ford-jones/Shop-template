import React from 'react'
import axios from 'axios'

export default function payButton({ cartItems }) {
  function handleClick(e) {
    e.preventDefault()
    axios
      .post('http://localhost:3000/api/v1/stripe/create-checkout-session', {
        cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return <button onClick={handleClick}>Go to payment</button>
}
