const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUser,
}

function userExists(username, db = connection) {
  return db('users')
    .where('username', username)
    .then((usersFound) => usersFound.length > 0)
}

function getUser(id, db = connection) {
  console.log('hit!: from db fn')
  return db('users').select('username').where('auth0_id', id).first()
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}
