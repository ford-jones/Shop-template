import React from 'react'
import Nav from './Nav'

import { postInquiry } from '../apis/inquiries'

export default function Contact() {

  function handleSubmit(e) {
    console.log('handle submit: hit! ', e)
  }

  return (
    <>
      <div className="contact">
        <h1 className="header">Contact</h1>
        <Nav />
        {/*instagram, email & inputs for name, email and an inquiry which will be sent to the db*/}
        <div className="socialMedia">
          <section className="igContact">
            <h3>instagram</h3>
            <a href="https://www.instagram.com/phantomoftheopera_conspiracy/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F340282366841710300949128132802533312753%2F%3Fnext%3Dhttps%253A%252F%252Fwww.instagram.com%252Fdirect%252Ft%252F340282366841710300949128195943276798904%252F%253Fnext%253D%25252F%2526__coig_login%253D1%26__coig_login%3D1">
              <img src={'/images/igLogo.jpg'} alt="instagram logo" />
            </a>
            <p>{'@phantomoftheopera_conspiracy'}</p>
          </section>
          <section className="emailContact">
            <h3>email</h3>
            <p>john@doe.gmail.com</p>
          </section>
        </div>
        <section className="dbContact">
          <h3>Or, contact directly!</h3>
          <p>name:</p>
          <input></input>
          <p>email:</p>
          <input></input>
          <p>Inquiry:</p>
          <input></input>
          <button onClick={handleSubmit}>submit</button>
          <footer>
            Responses can be expected to be recieved within the next 5 business
            days.
          </footer>
        </section>
      </div>
    </>
  )
}
