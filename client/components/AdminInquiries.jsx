import React from 'react'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link, Outlet } from 'react-router-dom'

import Nav from './Nav'

// import { getInquiries } from '../apis/inquiries'

export default function Shop() {
  // const [inquiries, setInquiries] = useState('')

  // useEffect(async () => {
  //   await setInquiries(getInquiries())
  // }, [])

  return (
    <>
      <h1 className="header">Admin: Inquiries</h1>
      <Nav />
      <p>test</p>
      {/* {inquiries.map((user) => (
        <>
          <ul key={user.id}>
            <li>{user.id}</li>
            <li>{user.date_recieved}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.inquiry}</li>
          </ul>
        </>
      ))} */}
    </>
  )
}
