import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AdminNav from './subcomponents/AdminNav'

export default function AdminHome() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  function handleClick(e) {
    e.preventDefault()
    loginWithRedirect()
  }

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
    return (
      <>
        <form>
          <button type="submit" onClick={handleClick} className="loginButton">
            sign in
          </button>
        </form>
      </>
    )
  }
}
