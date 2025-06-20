import { req, showAlertWeed } from '../index.js'

const DEFAULT_LINK = 'http://13.125.72.193:5000/'

// response.json()으로 보내려다가, 에러 코드 이용한 처리를 외부에서 하는 게 나을 것 같아 분리함.
/**
 *
 * @param {username} username
 * @param {password} password
 * @returns Promise response
 */
export async function reqLogin(username, password) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 타입
    },
    body: JSON.stringify({ username, password }),
  }

  return await req(`${DEFAULT_LINK}login`, options)
}

export async function loginExecute() {
  let overlayUsernameInput = document.querySelector('#overlay-username');
  let overlayUserpassInput = document.querySelector('#overlay-userpass');
  let headerUserName = document.querySelector('.header-user-name')

  const username = overlayUsernameInput.value
  const pass = overlayUserpassInput.value

  try {
    let response = await reqLogin(username, pass)
    if (response.ok) {
      showAlertWeed('로그인에 성공했습니다.')
      headerUserName.textContent = username;
    }
  } catch {
    showAlertWeed('로그인에 실패했습니다', true)
  }
}
