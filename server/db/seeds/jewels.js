exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jewels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('jewels').insert([
        { id: 1, name: 'diamond' },
        { id: 2, name: 'crystal' },
        { id: 3, name: 'zarconian' },
      ])
    })
}
