import request from 'superagent'

const rootUrl = '/api/v1'

export function postJeweleryImage(img) {
  console.log('api function arg: ', img)
  return request
  .post(rootUrl + '/images')
  .send(img)
  .then((req) => {
    console.log('api return request: ', req)
    return req
  })
}