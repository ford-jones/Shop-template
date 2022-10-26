import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AdminNav() {
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
          </span>
        </section>
      </div>
    </>
  )
}
