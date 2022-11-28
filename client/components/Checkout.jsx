import React from 'react'

import Nav from './subcomponents/Nav'
import CheckoutForm from './subcomponents/CheckoutForm'

export default function Checkout() {
  return (
    <>
      <h1 className="header">Checkout</h1>
      <Nav />
      <CheckoutForm />
    </>
  )
}
