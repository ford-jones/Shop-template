exports.up = function (knex) {
  return knex.schema.createTable('inquiries', (table) => {
    table.increments('id')
    table.integer('date_recieved')
    table.string('name')
    table.string('email')
    table.string('inquiry')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('inquiries')
}
