import request from 'superagent'

const rootUrl = '/api/v1'

export function getJewelery() {
  return request.get(rootUrl + '/jewelery').then((res) => {
    return res.body.jewelery
  })
}

export function postJeweleryText(data) {
  console.log('api data: ', data)

  return request
    .post(rootUrl + '/jewelery')
    .send(data)
    .then((req) => {
      return req.body.jewelery
    })
}

export function postJeweleryImage(img) {
  console.log('api function arg: ', img)
  return request
  .post(rootUrl + '/jewelery')
  .send(img)
  .then((req) => {
    console.log('api return request: ', req)
    return req
  })
}
