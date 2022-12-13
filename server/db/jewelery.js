const connection = require('./connection')

function getJewelery(db = connection) {
  return db('jewels').select()
}

function addJewelery(jewel, db = connection) {
  console.log('db.js data: ', jewel)
  return db('jewels')
    .insert({
      name: jewel.name,
      materials: jewel.materials,
      description: jewel.description,
      weight: jewel.weight,
      price: jewel.price,
    })
    .select()
}

function deleteJewelery(jewel, db = connection) {
  console.log('db.js data: ', jewel)
  return db('jewels').where('id', jewel.id).del()
}

module.exports = {
  getJewelery,
  addJewelery,
  deleteJewelery,
}
