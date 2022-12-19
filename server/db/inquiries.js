const connection = require('./connection')

function getInquiry(db = connection) {
  return db('inquiries').select()
}

function addInquiry(question, db = connection) {
  const dateNow = new Date(Date.now())
  return db('inquiries')
    .insert({
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
