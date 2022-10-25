import React, { useEffect, useState } from 'react'

import Nav from './subcomponents/Nav'
import Loader from './subcomponents/Loader'

import { getInquiries } from '../apis/inquiries'

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      setTimeout(async () => {
        const inq = await getInquiries()
        localStorage.setItem('inquiries', JSON.stringify(inq))
        const inquiry = localStorage.getItem('inquiries')
        setInquiries(JSON.parse(inquiry))
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
            <p>inquiry id: {user.id}</p>
            <p>date submitted: {user.date_recieved}</p>
            <p>user name: {user.name}</p>
            <p>user email: {user.email}</p>
            <p>user inquiry: {user.inquiry}</p>

            <button>mark as read</button>
            <div className="pageBreak"></div>
          </>
        ))
      )}
    </>
  )
}
