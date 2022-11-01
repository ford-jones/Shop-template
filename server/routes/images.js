const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const filePath = path.resolve(__dirname, '../' + 'public/images')

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {console.log('file: ', file), cb(null, `${filePath}`)},
  filename: (req, file, cb) => cb(null, `${file.originalName}`),
})

const fileUpload = multer({ storage: storageEngine })

router.post('/', fileUpload.single('image'), (req, res) => {
  console.log('route data: ', req.file)
  res.sendStatus(201)
})

module.exports = router