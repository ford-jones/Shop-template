const express = require('express')

const db = require('../db/jewelery')

const router = express.Router()

router.get('/', (req, res) => {
  db.getJewelery()
    .then((results) => {
      res.json({ jewelery: results.map((jewel) => jewel.name) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
