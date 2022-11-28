import React, { useState } from 'react'

export default function checkoutForm() {
  const [form, setForm] = useState({ name: '' })

  function handleChange(e) {
    e.preventDefault()
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="checkoutForm">
      <form>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={form.name}
          placeholder=" "
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
