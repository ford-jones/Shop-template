import request from 'superagent'

const rootUrl = '/api/v1'

export function getInquiries() {
  return request.get(rootUrl + '/admin/inquiries').then((res) => {
    return res.body.inquiries
  })
}

// not sure but might need to req.body here to get the what is inside the inputs on the contact page
// possibly inside ../api/jewelery.js

export function postInquiry(data) {
  console.log('inquiries api: ', data)

  return request
    .post(rootUrl + '/admin/inquiries')
    .send({ name: data.name, email: data.email, inquiry: data.inquiry })
    .then((res) => {
      res.body
    })
}
