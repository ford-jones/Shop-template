import request from 'superagent'

const rootUrl = '/api/v1'

export function postPayment(data) {
  return request
    .post(rootUrl + '/pay')
    .send(data)
    .then((req) => {
      return req.body
    })
}
