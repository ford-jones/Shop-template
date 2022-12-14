import request from 'superagent'

const rootUrl = '/api/v1'

export function getProducts() {
  return request.get(rootUrl + '/products').then((res) => {
    return res.body.products
  })
}

export function postProductText(data) {
  console.log('api data: ', data)

  return request
    .post(rootUrl + '/products')
    .send(data)
    .then((req) => {
      return req.body.products
    })
}

export function postProductImage(img) {
  console.log('api function arg: ', img)
  return request
    .post(rootUrl + '/products')
    .send(img)
    .then((req) => {
      console.log('api return request: ', req)
      return req
    })
}

export function deleteProducts(data) {
  console.log('data from api: ', data)
  return request
    .del(rootUrl + '/products')
    .send(data)
    .then((req) => {
      return req.body.products
    })
}
