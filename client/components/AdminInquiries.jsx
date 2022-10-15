import React, { useEffect, useState } from 'react'

import Nav from './Nav'
import Loader from './Loader'

import { getInquiries } from '../apis/inquiries'

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setTimeout(async () => {
        const inq = await getInquiries()
        setInquiries(inq)
        setLoading(false)
      }, 3000)
    } catch (err) {
      console.log(err)
    }
  }, [inquiries])
  // console.log('inquiries: ', inquiries, typeof inquiries)

  return (
    <>
      <h1 className="header">Admin: Inquiries</h1>
      <Nav />
      {loading ? (
        <Loader />
      ) : (
        inquiries.map((user) => (
          <>
            <p>{user.id}</p>
            <p>{user.date_recieved}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.inquiry}</p>

            <button>mark as read</button>
          </>
        ))
      )}
    </>
  )
}
