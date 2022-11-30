const express = require('express')
const path = require('path')

const jeweleryRoutes = require('./routes/jewelery')
const inquiryRoutes = require('./routes/inquiries')
const imageRoute = require('./routes/images')
const stripe = require('./routes/stripe')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/jewelery', jeweleryRoutes)
server.use('/api/v1/admin/inquiries', inquiryRoutes)
server.use('/api/v1/images', imageRoute)
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})
server.use('/api/v1/stripe', stripe)

module.exports = server
