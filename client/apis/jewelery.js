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
  console.log('api data: ', img)
}
