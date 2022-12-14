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
          materials: 'sterling silver, diamonds',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sequi neque quam rem consequuntur exercitationem. Veritatis quaerat in fugit. Dignissimos dolorem incidunt at error quos eveniet dolores consectetur deserunt reiciendis.',
          weight: '230g',
          price: 2200,
        },
        {
          id: 2,
          name: 'product2',
          materials: '24k gold',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sequi neque quam rem consequuntur exercitationem. Veritatis quaerat in fugit. Dignissimos dolorem incidunt at error quos eveniet dolores consectetur deserunt reiciendis.',
          weight: '200g',
          price: 3000,
        },
        {
          id: 3,
          name: 'product3',
          materials: 'sterling silver',
          description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sequi neque quam rem consequuntur exercitationem. Veritatis quaerat in fugit. Dignissimos dolorem incidunt at error quos eveniet dolores consectetur deserunt reiciendis.',
          weight: '190g',
          price: 1600,
        },
      ])
    })
}
