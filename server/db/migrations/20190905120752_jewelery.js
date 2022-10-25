exports.up = function (knex) {
  return knex.schema.createTable('jewels', (table) => {
    table.increments('id')
    table.string('name')
    table.string('materials')
    table.string('description')
    table.string('weight')
    table.integer('price')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jewels')
}
