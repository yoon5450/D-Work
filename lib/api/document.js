import {
  getUserSessionStorage,
  LOGIN_KEY,
  PROGRAMMERS_END_POINT,
  req,
  showAlertWeed,
} from '../index.js'

// TODO : 기본값 제거할 것. 로그인된 유저 세션을 불러와서 이용하면 됨.
let defaultHead = 'fes6-teamweed-'
let defaultUserName = 'yoon'
let defaultOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json', // 보내는 데이터 타입
    'x-username': defaultHead + defaultUserName, // 유저 불러오기 합성
  },
}

//TODO : 로그인하지 않았을 때 Alert 관리할 것.

/**
 * @description 전체 문서 목록을 받아오는 함수
 * @param {Object}  [options]
 * @returns Promise data(JSON)
 */
export async function getDoc(options = {}) {
  let submitOptions = { ...defaultOption, ...options }
  let userName = getUserSessionStorage(LOGIN_KEY)

  if (!userName) {
    showAlertWeed('데이터를 불러오기 위해서 로그인해야 합니다.', true)
  } else submitOptions.headers['x-username'] = defaultHead + userName

  let res = await req(`${PROGRAMMERS_END_POINT}`, submitOptions)
  if (!res.ok) throw new Error(`API 에러: ${res.status}`)
  return res.json()
}

/**
 * @description 특정 ID의 문서를 받아오는 함수
 * @param {number} docId
 * @param {Object} [options]
 * @returns Promise data(JSON)
 */
export async function getTargetDoc(docId, options = {}) {
  let submitOptions = { ...defaultOption, ...options }

  let userName = getUserSessionStorage(LOGIN_KEY)
  if (!userName) {
    showAlertWeed('데이터를 불러오기 위해서 로그인해야 합니다.', true)
  } else submitOptions.headers['x-username'] = defaultHead + userName

  let res = await req(`${PROGRAMMERS_END_POINT}/${docId}`, submitOptions)
  if (!res.ok) throw new Error(`API 에러: ${res.status}`)
  return res.json()
}

/**
 * @description 문서를 api로 추가하는 함수 세 번째 인수 ID를 삽입하여 하위 요소로 넣을 수 있음. ID를 삽입하지 않으면 루트에 들어감.
 * @param {string} title
 * @param {string} content
 * @param {number} [parentDocId]
 * @returns Promise data(JSON)
 */
export async function setDoc(title, content, parentDocId = null) {
  let options = {
    method: 'POST',
    body: JSON.stringify({ title, content, parent: parentDocId }),
  }
  let submitOptions = { ...defaultOption, ...options }

  let userName = getUserSessionStorage(LOGIN_KEY)
  if (!userName) {
    showAlertWeed('데이터를 저장하기 위해서는 로그인해야 합니다.', true)
  } else submitOptions.headers['x-username'] = defaultHead + userName

  return await req(`${PROGRAMMERS_END_POINT}`, submitOptions)
}

/**
 * @description 문서를 수정하는 함수 세 번째 인수 ID의 문서를 수정함.
 * @param {string} title
 * @param {string} content
 * @param {number} docId
 * @returns Promise data(JSON)
 */
export async function putDoc(title, content, docId) {
  let options = {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
  }
  let submitOptions = { ...defaultOption, ...options }

  let userName = getUserSessionStorage(LOGIN_KEY)
  if (!userName) {
    showAlertWeed('데이터를 수정하기 위해서는 로그인해야 합니다.', true)
  } else submitOptions.headers['x-username'] = defaultHead + userName

  return await req(`${PROGRAMMERS_END_POINT}/${docId}`, submitOptions)
}

/**
 * @description 지정한 ID의 문서를 삭제하는 함수
 * @param {number} docId
 * @returns Promise data(JSON)
 */
export async function deleteDoc(docId) {
  let options = {
    method: 'DELETE',
  }
  let submitOptions = { ...defaultOption, ...options }

  let userName = getUserSessionStorage(LOGIN_KEY)
  if (!userName) {
    showAlertWeed('데이터를 삭제하기 위해서는 로그인해야 합니다.', true)
  } else submitOptions.headers['x-username'] = defaultHead + userName

  return await req(`${PROGRAMMERS_END_POINT}/${docId}`, submitOptions)
}

// setDoc('test', 'test')
console.log(getDoc())