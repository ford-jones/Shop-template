const express = require('express')
const path = require('path')

const productRoutes = require('./routes/products')
const inquiryRoutes = require('./routes/inquiries')
const imageRoute = require('./routes/images')
const stripe = require('./routes/stripe')
const userRoutes = require('./routes/users')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/products', productRoutes)
server.use('/api/v1/admin/inquiries', inquiryRoutes)
server.use('/api/v1/images', imageRoute)
server.use('/api/v1/stripe', stripe)
server.use('/api/v1/users', userRoutes)
server.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

module.exports = server
