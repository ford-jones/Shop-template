const connection = require('./connection')

module.exports = {
  userExists,
  getUser,
  createUser,
}

function userExists(email, db = connection) {
  return db('users')
    .where('email', email)
    .then((usersFound) => usersFound.length > 0)
}

function getUser(id, db = connection) {
  return db('users').select('username').where('auth0_id', id).first()
}

function createUser(user, db = connection) {
  return db('users').insert(user)
}
