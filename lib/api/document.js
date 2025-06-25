import { PROGRAMMERS_END_POINT, req } from '../index.js'

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
  let res = await req(`${PROGRAMMERS_END_POINT}/${docId}`, submitOptions)
  if (!res.ok) throw new Error(`API 에러: ${res.status}`)
  return res.json()
}

/**
 * @description 문서를 api로 추가하는 함수 세 번째 인수 ID를 삽입하여 하위 요소로 넣을 수 있음.
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
  return await req(`${PROGRAMMERS_END_POINT}`, submitOptions)
}

/**
 * @description 
 * @param {string} title
 * @param {string} content
 * @param {number} [docId]
 * @returns Promise data(JSON)
 */
export async function putDoc(title, content, docId) {
  let options = {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
  }

  let submitOptions = { ...defaultOption, ...options }
  return await req(`${PROGRAMMERS_END_POINT}/${docId}`, submitOptions)
}

export async function deleteDoc(docId) {
  let options = {
    method: 'DELETE',
  }

  let submitOptions = { ...defaultOption, ...options }
  return await req(`${PROGRAMMERS_END_POINT}/${docId}`, submitOptions)
}
