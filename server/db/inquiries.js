const connection = require('./connection')

function getInquiry(db = connection) {
  return db('inquiries').select()
}

// write a db function that adds the date, name, email and inquiry of a user to the database
//
// addInquiry(question, db = connection) {
//  return db('inquiries').insert(inquiry {question.date, question.name, question.email, question.inquiry}).where().select()
// }
// will have a nested fn for fetching Date.now()
function addInquiry(question, db = connection) {
  const dateNow = new Date(Date.now())

  return db('inquiries')
    .insert({
      id: question.id,
      date_recieved: dateNow,
      name: question.name,
      email: question.email,
      inquiry: question.inquiry,
    })
    .select()
}

module.exports = {
  getInquiry,
  addInquiry,
}
