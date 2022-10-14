const express = require('express')

const db = require('../db/inquiries')

const router = express.Router()

router.get('/', (req, res) => {
  db.getInquiry()
    .then((results) => {
      res.json({ inquiries: results.map((inquiry) => inquiry) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

// create a post route that sends the body of the inputs on the /contact route to the db
router.post('/', (req, res) => {
  const inquiry = req.body
  db.addInquiry(inquiry)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'something went wrong' })
    })
})

module.exports = router
