import { req, showAlertWeed } from '../index.js'

const DEFAULT_LINK = 'http://13.125.72.193:5000/'

/**
 * @description 회원가입 요청
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

/**
 *
 * @description 로그인 실행. 이벤트 처리
 */
export async function signInExecute(e) {
  e.preventDefault()
  let overlay = document.querySelector('#overlay')
  let overlayUsernameInput = document.querySelector('#overlay-siginin-username')
  let overlayUserpassInput = document.querySelector('#overlay-siginin-userpass')

  const siginInLayout = document.querySelector('.overlay-form-wrapper-signin')
  const username = overlayUsernameInput.value
  const pass = overlayUserpassInput.value

  try {
    let response = await reqSignIn(username, pass)
    if (response.ok) {
      showAlertWeed('회원가입에 성공했습니다.')
    }
  } catch {
    showAlertWeed('회원가입에 실패했습니다', true)
  }

  overlayUsernameInput.value = '';
  overlayUserpassInput.value = '';
  siginInLayout.style.top = '-50%'

  overlay.classList.add('hidden')
}
