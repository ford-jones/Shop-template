import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {  postJeweleryText } from '../apis/jewelery'
import {postJeweleryImage} from '../apis/images'

import AdminNav from './subcomponents/AdminNav'

export default function AdminProducts() {
  const [postStatus, setPostStatus] = useState('')
  const [imageForm, setImageForm] = useState({
    preview: '',
    data: '',
  })
  const [textForm, setTextForm] = useState({
    name: '',
    materials: '',
    description: '',
    weight: '',
    price: '',
  })
  const navigate = useNavigate()

  function handleChange(e) {
    e.preventDefault()
    setTextForm({ ...textForm, [e.target.name]: e.target.value })
  }
  function handleImage(e) {
    e.preventDefault()

    let formData = new FormData()
    formData.append('file', imageForm.data)

    fetch('http://localhost:3000/api/v1/images', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        setPostStatus(res.status)
        console.log('POST status: ', postStatus)
        const image = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        setImageForm(image)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('new product: ', textForm)
    postJeweleryImage(imageForm)
    postJeweleryText(textForm)
      .then(navigate('/admin'))
      .catch((err) => {
        console.error(err)
      })
  }

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
              placeholder="In Grams (g)..."
              value={textForm.weight}
              onChange={handleChange}
            ></input>
            <label htmlFor="price" noValidate>
              Product price: $
            </label>
            <input
              type="text"
              name="price"
              placeholder="Do not add a dollar sign."
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
          <form>
            <input type="file" name="file" onChange={handleImage}></input>
          </form>
          <img src={imageForm.preview} alt="productPreview"></img>
        </section>
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