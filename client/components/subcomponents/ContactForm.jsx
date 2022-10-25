import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { postInquiry } from '../../apis/inquiries'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', inquiry: '' })
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  // console.log(form)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('handle submit data: ', form)
    postInquiry(form)
      .then(navigate('/shop'))
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <>
      <section className="dbContact">
        <h3>Or, contact directly!</h3>
        <form id="form" noValidate>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder=" "
            value={form.name}
            onChange={handleChange}
            className="nameInput"
          ></input>
          <label htmlFor="email">Email Address: </label>
          <input
            type="text"
            name="email"
            placeholder=" "
            value={form.email}
            onChange={handleChange}
            className="emailInput"
          ></input>
          <label htmlFor="inquiry">Leave a comment or inquiry below: </label>
          <input
            type="text"
            name="inquiry"
            placeholder=" "
            value={form.inquiry}
            onChange={handleChange}
            className="inquiryInput"
          ></input>
          <button type="submit" onClick={handleSubmit} className="button">
            Submit Inquiry
          </button>
        </form>
      </section>
    </>
  )
}
