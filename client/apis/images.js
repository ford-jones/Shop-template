import request from 'superagent'

const rootUrl = '/api/v1'

export function postProductImage(img) {
  return request
    .post(rootUrl + '/images')
    .send(img)
    .then((req) => {
      return req
    })
}
