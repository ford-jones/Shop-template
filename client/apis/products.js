import request from 'superagent'

const rootUrl = '/api/v1'

export function getProducts() {
  return request.get(rootUrl + '/products').then((res) => {
    return res.body.products
  })
}

export function postProductText(data) {
  return request
    .post(rootUrl + '/products')
    .send(data)
    .then((req) => {
      return req.body.products
    })
}

export function postProductImage(img) {
  return request
    .post(rootUrl + '/products')
    .send(img)
    .then((req) => {
      return req
    })
}

export function deleteProducts(data) {
  return request
    .del(rootUrl + '/products')
    .send(data)
    .then((req) => {
      return req.body.products
    })
}
