import request from 'superagent'

const rootUrl = '/api/v1'

export function postProductImage(img) {
  console.log('api function arg: ', img)
  return request
    .post(rootUrl + '/images')
    .send(img)
    .then((req) => {
      console.log('api return req: ', req)
      return req
    })
}
