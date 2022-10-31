const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const filePath = path.resolve(__dirname, '../' + 'public/images')

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => cb(null, `${filePath}`),
  filename: (req, file, cb) => cb(null, `${file.originalName}`),
})

const upload = multer({ storage: storageEngine })
console.log('upload var: ', upload)

router.post('/', upload.single('image'), (req, res) => {
  console.log('route data: ', req)
  res.sendStatus(201)
})

module.exports = router