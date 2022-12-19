exports.seed = function (knex) {
  return knex('products')
    .del()
    .then(function () {
      return knex('products').insert([
        {
          id: 1,
          name: 'product1',
          unique_name: 'Chess Piece',
          materials: 'chess piece material, probably plastic',
          description: 'Lorem ipsum a singular black bishop.',
          weight: '230g',
          price: 30,
        },
        {
          id: 2,
          unique_name: 'pet (bi0-hacked)',
          name: 'product2',
          materials: 'Cat, human, faceswap AI.',
          description: 'Cat human hybrid non-refundable.',
          weight: '5kg',
          price: 50,
        },
        {
          id: 3,
          unique_name: 'Person at home',
          name: 'product3',
          materials: 'Television.',
          description: 'Person watching TV and enjoying it.',
          weight: '190g',
          price: 120,
        },
      ])
    })
}
