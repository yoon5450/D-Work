import {req} from '../index'

const DEFAULT_LINK = 'http://13.125.72.193:5000/postings'


export async function reqLogin( username, password ) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 타입
    },
    body: JSON.stringify({ username, password }),
  }

  return await req(`${DEFAULT_LINK}/login`, options)
}

export async function reqSignIn( username, password ) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 타입
    },
    body: JSON.stringify({ username, password }),
  }
  return await req(`${DEFAULT_LINK}/signin`, options)
}