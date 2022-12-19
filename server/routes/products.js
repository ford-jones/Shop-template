const express = require('express')
const multer = require('multer')
const db = require('../db/products')
const router = express.Router()

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '../images/public'),
  filename: (req, file, cb) => cb(null, file.originalName),
})

const upload = multer({ storage: storageEngine })

router.get('*', (req, res) => {
  db.getProducts()
    .then((results) => {
      res.json({ products: results.map((product) => product) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {
  let product = req.body

  db.addProducts(product)

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
  res.sendStatus(201)
})

router.delete('/', (req, res) => {
  const product = req.body

  db.deleteProducts(product)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.sendStatus(500).json({ message: 'something went wrong' })
    })
})
module.exports = router
