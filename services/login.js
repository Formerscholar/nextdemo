import request from './axios'


export function getLoginCode(params) {
  return request({
    url: '/getLoginCode',
    method: 'GET',
    params
  })
}

export function getLogin(params) {
  return request({
    url: '/login',
    method: 'GET',
    params
  })
}

export function getLogout(params) {
  return request({
    url: '/loginOut',
    method: 'GET',
    params
  })
}