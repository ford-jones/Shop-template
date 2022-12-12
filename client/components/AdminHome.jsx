import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AdminNav from './subcomponents/AdminNav'

//  use conditional rendering to display either a sign in button OR the admin home page
//  this should depend on authentication status, e.g if(!isAuthenticated) { return <button>sign in</button>}
//  reference the sign in button used in jwt-auth nav.jsx component

export default function AdminHome() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  function handleClick(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  function handleLogout(e) {
    e.preventDefault()
    logout()
  }

  if (!isAuthenticated) {
    return (
      <>
        <form>
          <button type="submit" onClick={handleClick}>
            sign in
          </button>
          <button type="submit" onClick={handleLogout}>
            logout
          </button>
        </form>
      </>
    )
  } else {
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
  }
}
