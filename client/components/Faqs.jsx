import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import Nav from './Nav'

export default function Faqs() {
  return (
    <>
      <div className="Faqs">
        <h1 className="header">{"FAQ's"}</h1>
        <Nav />
        <h2>How long can I expect to wait?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque in
          possimus, voluptas commodi dolor laboriosam optio soluta. Tempora
          animi quia, ipsum facere ipsam quis similique saepe consequuntur,
          incidunt a inventore!
        </p>
        <h2>Where do the materials come from?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          iste quas repudiandae cum enim eligendi iusto nesciunt aut esse
          soluta, praesentium, cumque, ipsa asperiores? Repellendus soluta ut
          hic molestiae architecto?
        </p>
        <h2>Can payments be made in installments?</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis labore
          qui, sit vel saepe quod eos nobis modi delectus in autem ea doloribus
          quia, assumenda dolore repellendus numquam maiores quaerat?
        </p>
        <h2>Can I get a custom piece?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          pariatur ipsa. Itaque, iure placeat! Non veniam, nesciunt inventore
          repellat rerum unde temporibus, dolorum doloribus consectetur aut quo
          odio! Illum, corrupti. For enquiries about custom pieces click
          {<Link to="/contact">here!</Link>}
          {<Outlet />}
        </p>
      </div>
    </>
  )
}
