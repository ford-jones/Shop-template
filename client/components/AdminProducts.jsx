import React from 'react'
import { useNavigate } from 'react-router-dom'

import AdminNav from './subcomponents/AdminNav'
import AdminProductsForm from './subcomponents/AdminProductsForm'

export default function AdminProducts() {
  const navigate = useNavigate()

  function handleNavigate(e) {
    e.preventDefault()
    navigate('/admin')
  }

  return (
    <>
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
}
