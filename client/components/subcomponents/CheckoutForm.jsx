import React, { useState } from 'react'

export default function checkoutForm() {
  const [form, setForm] = useState({ email: '' })

  function handleChange(e) {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="checkoutForm">
      <form>
        <label htmlFor="email">email</label>
        <input
          name="email"
          type="text"
          value={form.email}
          placeholder=" "
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
