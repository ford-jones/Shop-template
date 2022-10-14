const connection = require('./connection')

function getInquiry(db = connection) {
  return db('inquiries').select()
}

// write a db function that adds the date, name, email and inquiry of a user to the database
// will have a nested fn for fetching Date.now()
function addInquiry(question, db = connection) {
  const dateNow = new Date(Date.now())

  return db('inquiries')
    .insert({
      date_recieved: dateNow,
      name: question[0].name,
      email: question[0].email,
      inquiry: question[0].inquiry,
    })
    .select()
}

module.exports = {
  getInquiry,
  addInquiry,
}
