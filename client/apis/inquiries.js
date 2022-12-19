import request from 'superagent'

const rootUrl = '/api/v1'

export function getInquiries() {
  return request.get(rootUrl + '/admin/inquiries').then((res) => {
    return res.body.inquiries
  })
}

export function postInquiry(data) {
  return request
    .post(rootUrl + '/admin/inquiries')
    .send(data)
    .then((req) => {
      return req.body.inquiries
    })
}
