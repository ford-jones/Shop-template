import React, { useEffect, useState } from 'react'

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
          return await getInquiries()
        })
        setLoading(false)
      }, 3000)
    } catch (err) {
      console.log(err)
    }
  }, [])
  console.log('inquiries: ', inquiries, typeof inquiries)

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
