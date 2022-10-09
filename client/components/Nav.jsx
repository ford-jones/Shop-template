import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav">
        <section className="linkBox">
          <span>
            <Link to="/" className="link">
              Home
            </Link>
            <Outlet />
            <Link to="/shop" className="link">
              Shop
            </Link>
            <Outlet />
            <Link to="/about" className="link">
              About
            </Link>
            <Outlet />
            <Link to="/contact" className="link">
              Contact
            </Link>
            <Outlet />
            <Link to="/faq" className="link">
              FAQ
            </Link>
            <Outlet />
            <Link to="/cart" className="link">
              Cart
            </Link>
            <Outlet />
          </span>
        </section>
      </div>
    </>
  )
}

export default Nav
