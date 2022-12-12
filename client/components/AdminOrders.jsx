import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

import AdminNav from './subcomponents/AdminNav'

export default function AdminOrders() {
  const {isAuthenticated, loginWithRedirect} = useAuth0()

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }
  if(isAuthenticated) {
    return (
      <>
        <h1 className="header">Admin: Orders</h1>
        <AdminNav />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          quos, possimus, similique ut expedita animi ea nostrum modi porro quas
          tempore minus quod esse consequuntur! Repellendus accusantium deleniti
          repellat?
        </p>
      </>
    )

  } else {
    return (
      <>
        <form>
          <button type="submit" onClick={handleSignIn} className="loginButton">
            sign in
          </button>
        </form>
      </>
    )
  }
}
