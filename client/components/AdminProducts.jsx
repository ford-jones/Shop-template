import React from 'react'

import AdminNav from './subcomponents/AdminNav'

export default function AdminProducts() {
  return (
    <>
      <h1 className="header">Admin: Products</h1>
      <AdminNav />
      <h2>Add or remove products from the database here:</h2>
      <h3>Products will appear in the shop route on the user side</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste ab,
        maxime ex inventore id, ut odio perferendis at ea facilis aut quod
        consequatur est veritatis velit eaque distinctio reiciendis repudiandae?
      </p>
    </>
  )
}
