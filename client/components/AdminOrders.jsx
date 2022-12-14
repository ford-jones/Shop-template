import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AdminNav from './subcomponents/AdminNav'
import AdminSignIn from './subcomponents/AdminSignIn'

export default function AdminOrders() {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
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
    return <AdminSignIn />
  }
}
