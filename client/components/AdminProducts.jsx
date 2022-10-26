import React, { useState } from 'react'

import AdminNav from './subcomponents/AdminNav'

export default function AdminProducts() {
  const [textForm, setTextForm] = useState({
    name: '',
    materials: '',
    description: '',
    weight: '',
    price: '',
  })

  function handleChange(e) {
    e.preventDefault()
    setTextForm({ ...textForm, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('new product: ', textForm)
  }

  function handleDelete(e) {
    e.preventDefault()
  }

  return (
    <>
      <div className="adminProducts">
        <h1 className="header">Admin: Products</h1>
        <AdminNav />
        <h2>Add or remove products from the database here:</h2>
        <h3>Products will appear in the shop on the user side</h3>
        <section className="adminProductsForm">
          <form className="ProductsForm">
            <p>
              Fill out the fields bellow and press submit to add a product to
              the database.
            </p>
            <label htmlFor="name" noValidate>
              Product Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder=" "
              value={textForm.name}
              onChange={handleChange}
            ></input>
            <label htmlFor="materials" noValidate>
              Materials used:
            </label>
            <input
              type="text"
              name="materials"
              placeholder=" "
              value={textForm.materials}
              onChange={handleChange}
            ></input>
            <label htmlFor="description" noValidate>
              Product Description:
            </label>
            <input
              type="text"
              name="description"
              placeholder=" "
              value={textForm.description}
              onChange={handleChange}
            ></input>
            <label htmlFor="weight" noValidate>
              Product weight:
            </label>
            <input
              type="text"
              name="weight"
              placeholder="Please give a weight in grams (g)..."
              value={textForm.weight}
              onChange={handleChange}
            ></input>
            <label htmlFor="price" noValidate>
              Product price:
            </label>
            <input
              type="text"
              name="price"
              placeholder="Do not add a dollar($) sign."
              value={textForm.price}
              onChange={handleChange}
            ></input>
            <button type="submit" onClick={handleSubmit} className="button">
              Submit to database
            </button>
          </form>
        </section>
        <section className="productImageForm">
          <p>Upload an image here!</p>
          <div className="imageDrop"></div>
        </section>
        <section className="deleteProduct">
          <form className="removeProduct">
            <button type="submit" onClick={handleDelete} className="button">
              Delete an item:
            </button>
          </form>
        </section>
      </div>
    </>
  )
}
