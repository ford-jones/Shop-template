exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|6396d00d5915c75c40b6a49a',
          email: 'admin@admin.com',
        },
      ])
    )
}
// this is a test account using the test api key
// the password is Giveaccess1234
