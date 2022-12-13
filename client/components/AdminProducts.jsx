import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import AdminNav from './subcomponents/AdminNav'
import AdminProductsForm from './subcomponents/AdminProductsForm'
import AdminDelProduct from './subcomponents/AdminDelPopup'

export default function AdminProducts() {
  const [popup, setPopup] = useState(false)
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  function handleNavigate(e) {
    e.preventDefault()
    setPopup(true)
  }

  function handleSignIn(e) {
    e.preventDefault()
    loginWithRedirect()
  }

  if (isAuthenticated) {
    return (
      <>
        {popup ? <AdminDelProduct setPopup={setPopup} /> : null}
        <div className="adminProducts">
          <h1 className="header">Admin: Products</h1>
          <AdminNav />
          <h2>Add or remove products from the database here:</h2>
          <h3>Products will appear in the shop on the user side</h3>
          <p>
            Fill out the fields bellow and press submit to add a product to the
            database.
          </p>
          <AdminProductsForm />
          <section className="deleteProduct">
            <form className="removeProduct">
              <button type="submit" onClick={handleNavigate} className="button">
                Delete items:
              </button>
            </form>
          </section>
        </div>
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
