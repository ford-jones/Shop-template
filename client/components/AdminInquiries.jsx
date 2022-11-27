import React, { useEffect, useState } from 'react'

import AdminNav from './subcomponents/AdminNav'
import Loader from './subcomponents/Loader'

import { getInquiries } from '../apis/inquiries'

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState('')
  const [loading, setLoading] = useState(true)

  function handleClick(e) {
    e.preventDefault()

    const findInquiry = document.getElementById(e.target.id)

    if (findInquiry) {
      return (findInquiry.style.backgroundColor = 'lightGray')
    }
  }

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
      <AdminNav />
      {loading ? (
        <Loader />
      ) : (
        inquiries.map((user) => (
          <>
            <div id={user.id} className="contactForm">
              <p>inquiry id: {user.id}</p>
              <p>date submitted: {user.date_recieved}</p>
              <p>user name: {user.name}</p>
              <p>user email: {user.email}</p>
              <p>user inquiry: {user.inquiry}</p>
              <form>
                <button type="submit" onClick={handleClick} id={user.id}>
                  mark as read
                </button>
              </form>
            </div>
            <div className="pageBreak"></div>
          </>
        ))
      )}
    </>
  )
}
