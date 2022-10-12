import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav">
        <section className="linkBox">
          <span>
            <Link to="/" className="navLink">
              Home
            </Link>
            <Outlet />
            <Link to="/shop" className="navLink">
              Shop
            </Link>
            <Outlet />
            <Link to="/about" className="navLink">
              About
            </Link>
            <Outlet />
            <Link to="/contact" className="navLink">
              Contact
            </Link>
            <Outlet />
            <Link to="/faq" className="navLink">
              FAQ
            </Link>
            <Outlet />
            <Link to="/cart" className="navLink">
              Cart
            </Link>
            <Outlet />
            <Link to="/admin/inquiries" className="navlink">
              test
            </Link>
            <Outlet />
          </span>
        </section>
      </div>
    </>
  )
}

export default Nav
