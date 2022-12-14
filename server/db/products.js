const connection = require('./connection')

function getProducts(db = connection) {
  return db('products').select()
}

function addProducts(product, db = connection) {
  console.log('db.js data: ', product)
  return db('products')
    .insert({
      name: product.name,
      materials: product.materials,
      description: product.description,
      weight: product.weight,
      price: product.price,
    })
    .select()
}

function deleteProducts(product, db = connection) {
  console.log('db.js data: ', product)
  return db('products').where('id', product.id).del()
}

module.exports = {
  getProducts,
  addProducts,
  deleteProducts,
}
