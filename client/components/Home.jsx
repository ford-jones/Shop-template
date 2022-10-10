import React from 'react'

import Nav from './Nav'

export default function Home() {
  return (
    <>
      <div className="home">
        <h1 className="header">Home</h1>
        <Nav />
        <h2 className="stgmataHome">STGMATA</h2>
        <h3>Welcome to Stgmata</h3>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          sequi neque quam rem consequuntur exercitationem. Veritatis quaerat in
          fugit. Dignissimos dolorem incidunt at error quos eveniet dolores
          consectetur deserunt reiciendis.
        </p>
      </div>
    </>
  )
}
