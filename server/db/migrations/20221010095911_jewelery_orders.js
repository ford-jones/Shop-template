exports.up = function (knex) {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id')
    table.integer('jewelery_id')
    table.integer('date')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('orders')
}
