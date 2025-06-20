import {req, showAlertWeed} from '../index.js'

const DEFAULT_LINK = 'http://13.125.72.193:5000/'
/**
 *
 * @param {username} username
 * @param {password} password
 * @returns Promise response
 */
export async function reqSignIn(username, password) {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // 보내는 데이터 타입
    },
    body: JSON.stringify({ username, password }),
  }
  return await req(`${DEFAULT_LINK}register`, options)
}


// TODO : 오류 코드 확인해서 회원가입 실패 이유 알려줄 것
export async function signInExecute() {
  let overlayUsernameInput = document.querySelector('#overlay-siginin-username');
  let overlayUserpassInput = document.querySelector('#overlay-siginin-userpass');

  const username = overlayUsernameInput.value
  const pass = overlayUserpassInput.value

  try {
    let response = await reqSignIn(username, pass)
    if (response.ok) {
      showAlertWeed('회원가입에 성공했습니다.');
    }
  } catch {
    showAlertWeed('회원가입에 실패했습니다', true);
  }
}
