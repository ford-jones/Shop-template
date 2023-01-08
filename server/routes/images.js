const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, '../' + 'public/images')

const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${filePath}`)
  },
  filename: (req, file, cb) => cb(null, `${file.originalname}`),
})

const fileUpload = multer({ storage: storageEngine })

router.post('/', fileUpload.single('image'), (req, res) => {
  res.sendStatus(201)
})

//  new code, unchecked
router.delete('/', (req, res) => {
  fs.unlink(`${filePath}/${req.body.name}.png`)
  res.sendStatus(201)
  console.log('route req: ', req)
  console.log('route res: ', res)
})

module.exports = router
