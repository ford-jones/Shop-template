import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav">
        <section className="header">
          <h1> STGMATA </h1>
        </section>
        <section className="links">
          <span>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <Outlet />
          </span>
        </section>
      </div>
    </>
  )
}

export default Nav
