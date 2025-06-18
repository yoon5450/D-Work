let END_POINT = './api/login'

let options = {
  method: 'POST',

  headers: {
    'Content-Type': 'application/json', // 보내는 데이터 타입
  },

  body: {},
}

export function req() {
  return fetch(END_POINT, options).then((response) => {
    if (!response.ok) throw new Error('네트워크 오류 : ' + response.status)
    return response.json()
  })
}
