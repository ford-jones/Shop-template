import React from 'react'

import Nav from './subcomponents/Nav'

export default function Home() {
  return (
    <>
      <div className="home">
        <h1 className="header">Home</h1>
        <Nav />
        <h2 className="homeText">DIGI PORTAL.</h2>
        <p className="text">Made by Ford Jones 2022.</p>
      </div>
    </>
  )
}
