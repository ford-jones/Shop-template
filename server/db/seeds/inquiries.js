exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('inquiries')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('inquiries').insert([
        {
          id: 1,
          date_recieved: 12102022,
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          inquiry:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sequi neque quam rem consequuntur exercitationem. Veritatis quaerat in fugit. Dignissimos dolorem incidunt at error quos eveniet dolores consectetur deserunt reiciendis.',
        },
      ])
    })
}