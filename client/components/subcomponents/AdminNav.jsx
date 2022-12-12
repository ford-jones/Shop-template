import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function AdminNav() {
  const { logout } = useAuth0()

  function handleLogout(e) {
    e.preventDefault()
    logout()
  }

  return (
    <>
      <div className="nav">
        <section className="linkBox">
          <span>
            <Link className="navLink" to="/admin">
              Admin Home
            </Link>
            <Outlet />
            <Link className="navLink" to="/admin/inquiries">
              Customer Inquiries
            </Link>
            <Outlet />
            <Link className="navLink" to="/admin/products">
              Add/Remove Products
            </Link>
            <Outlet />
            <Link className="navLink" to="/admin/orders">
              Orders
            </Link>
            <button type="submit" onClick={handleLogout}>
              logout
            </button>
          </span>
        </section>
      </div>
    </>
  )
}
