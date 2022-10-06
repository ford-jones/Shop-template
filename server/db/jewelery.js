const connection = require('./connection')

function getJewelery(db = connection) {
  return db('jewels').select()
}

module.exports = {
  getJewelery,
}
