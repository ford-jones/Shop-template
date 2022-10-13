import request from 'superagent'

const rootUrl = '/api/v1'

export function getInquiries() {
  return request.get(rootUrl + '/admin/inquiries').then((res) => {
    return res.body.inquiries
  })
}
