const express = require('express')
const multer = require('multer')
const db = require('../db/jewelery')
const router = express.Router()

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '../images/public'),
  filename: (req, file, cb) => cb(null, file.originalName),
})

const upload = multer({ storage: storageEngine })

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
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500).json({ message: 'something went wrong' })
    })
})

router.post('/single', upload.single('image'), (req, res) => {
  console.log('route data: ', req.file)
  res.sendStatus(201)
})

module.exports = router
