const express = require('express')

const db = require('../db/jewelery')

const router = express.Router()

router.get('*', (req, res) => {
  db.getJewelery()
    .then((results) => {
      res.json({ jewelery: results.map((jewel) => jewel) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  let jewel = req.body

  console.log('route data: ', jewel)
  db.addJewelery(jewel)

    .then(() => {
      res.sendStatus(201)
      return null
    }).catch((err) => {
      console.log(err)
      res.sendStatus(500).json({message: 'something went wrong'})
    })
})

module.exports = router
