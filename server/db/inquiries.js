const connection = require('./connection')

function getInquiry(db = connection) {
  return db('inquiries').select()
}

module.exports = {
  getInquiry,
}
