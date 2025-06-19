import {req} from '../index'

export async function reqLogin(id, pass) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 타입
    },
    body: JSON.stringify({ id, pass }),
  }

  return await req('./login', options)
}

export async function reqSignIn(id, pass) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 타입
    },
    body: JSON.stringify({ id, pass }),
  }
  return await req('./signin', options)
}
