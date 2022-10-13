// import React from 'react'
import React, { useEffect, useState } from 'react'
// import { useNavigate, Link, Outlet } from 'react-router-dom'

import Nav from './Nav'
import Loader from './Loader'

import { getInquiries } from '../apis/inquiries'

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setTimeout(() => {
        setInquiries(async () => {
          setLoading(false)
          return await getInquiries()
        })
      }, 5000)
    } catch (err) {
      console.log(err)
    }
  }, [])
  console.log('inquiries: ', inquiries)

  return (
    <>
      <h1 className="header">Admin: Inquiries</h1>
      <Nav />
      {loading ? (
        <Loader />
      ) : (
        inquiries.map((user) => (
          <>
            <ul key={user.id}>
              <li>{user.id}</li>
              <li>{user.date_recieved}</li>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.inquiry}</li>
            </ul>
          </>
        ))
      )}
    </>
  )
}
