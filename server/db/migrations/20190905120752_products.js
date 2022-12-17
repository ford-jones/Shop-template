exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id')
    table.string('name')
    table.string('unique_name')
    table.string('materials')
    table.string('description')
    table.string('weight')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products')
}
