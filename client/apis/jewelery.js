import request from 'superagent'

const rootUrl = '/api/v1'

export function getJewelery() {
  return request.get(rootUrl + '/jewelery').then((res) => {
    return res.body.jewelery
  })
}
