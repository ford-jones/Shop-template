import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AdminNav from './subcomponents/AdminNav'
import AdminSignIn from './subcomponents/AdminSignIn'

export default function AdminHome() {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return (
      <>
        <h1 className="header">Admin: Home</h1>
        <AdminNav />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          amet doloribus rem? Eveniet a voluptatum architecto sed officia,
          aperiam dignissimos itaque magnam tempora quidem aut quisquam dolorum
          similique assumenda mollitia.
        </p>
      </>
    )
  } else {
    return <AdminSignIn />
  }
}
