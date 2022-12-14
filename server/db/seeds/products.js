exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          name: 'product1',
          materials: 'chess piece material, probably plastic',
          description: 'Lorem ipsum a singular black bishop.',
          weight: '230g',
          price: 30,
        },
        {
          id: 2,
          name: 'product2',
          materials: 'Cat, human, faceswap AI.',
          description: 'Cat human hybrid non-refundable.',
          weight: '5kg',
          price: 50,
        },
        {
          id: 3,
          name: 'product3',
          materials: 'Television.',
          description: 'Person watching TV and enjoying it.',
          weight: '190g',
          price: 120,
        },
      ])
    })
}
