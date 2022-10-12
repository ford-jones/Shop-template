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

module.exports = router
