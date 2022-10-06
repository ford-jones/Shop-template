const express = require('express')
const path = require('path')

const jeweleryRoutes = require('./routes/jewelery')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/jewelery', jeweleryRoutes)

module.exports = server
